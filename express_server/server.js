const express = require("express");
const bodyParser = require("body-parser");
const db = require("./src/db/database");
const authRouter = require('./src/routes/authRoutes');
const candidatesRouter = require("./src/routes/candidatesRoutes");
const cors=require('cors');
const app = express();
const PORT = 8080;


app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

app.use('/api/auth', authRouter);
app.use("/api/candidates", candidatesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
