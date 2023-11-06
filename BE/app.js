require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
const userAuthRoute = require("./route/userRoutes");
const port = 3000;
//cors

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(cookieParser());
//Allowance
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/user", userAuthRoute);
app.use("/", authMiddleware, (req, res, next) => {
  res.send("hello");
});

//Error Handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message, success: false });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
