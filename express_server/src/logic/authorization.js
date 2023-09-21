const jwt = require("jsonwebtoken");
const util = require("util");

const verifyToken = util.promisify(jwt.verify);

const Auth = async (headers) => {
  try {
    const token = headers?.authorization?.replace("Bearer ", "");
    if (!token) throw new Error("token is required for authentication");
    await verifyToken(token, "secretKey");
  } catch (error) {
    throw error;
  }
};

module.exports = { Auth };
