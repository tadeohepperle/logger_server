const fs = require("fs");
const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const app = express();
const savelogs = require("./savelogs");

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  let body = req.body ?? {};
  let time = new Date().toLocaleString();
  time = chalk.bgGray(time.padEnd(22, " ")) + "    ";
  if (body.log) {
    console.log(time + chalk.white(body.log));
  }
  if (body.info) {
    console.log(time + chalk.blue(body.info));
  }
  if (body.warn) {
    console.log(time + chalk.yellow(body.warn));
  }
  if (body.error) {
    console.log(time + chalk.red(body.error));
  }
  savelogs.saveLog(body);
  res.send("got it");
});

const port = 6969;

app.listen(port, () => {
  console.log(`active on port ${port}`);
});

/// Use the following to send a message:
/*

fetch("http://localhost:6969/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ info: "hello" }),
  });

*/
