const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db/database");

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ success: false, msg: "Please fill in all fields" });
  }
  const checkUserQuery = "SELECT * FROM user WHERE username = ? OR email = ?";
  db.get(checkUserQuery, [username, email], (err, user) => {
    if (err) {
      return res.status(500).json({ success: false, msg: "Internal server error" });
    }
    if (user) {
      return res.status(400).json({ success: false, msg: "Username or email already in use" });
    }
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ success: false, msg: "Password hashing error" });
      }
      const insertUserQuery = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
      db.run(insertUserQuery, [username, email, hashedPassword], (err) => {
        if (err) {
          return res.status(500).json({ success: false, msg: "User registration error" });
        }
        const token = jwt.sign({ username, email }, "secretKey", { expiresIn: "1h" });
        return res.status(201).json({ success: true, token });
      });
    });
  });
};

const signin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, msg: 'Please fill in all fields' });
  }

  const getUserQuery = 'SELECT * FROM user WHERE username = ?';

  db.get(getUserQuery, [username], (err, user) => {
    if (err) {
      return res.status(500).json({ success: false, msg: 'Internal server error' });
    }

    if (!user) {
      return res.status(400).json({ success: false, msg: 'Username not found' });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ success: false, msg: 'Password comparison error' });
      }

      if (isMatch) {
        const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
        return res.status(200).json({ success: true, token });
      } else {
        return res.status(400).json({ success: false, msg: 'Incorrect password' });
      }
    });
  });
};
module.exports = { signup, signin }