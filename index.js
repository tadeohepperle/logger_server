const fs = require("fs");
const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const app = express();

const logsDir = "./logs";
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  let body = req.body ?? {};
  if (body.log) {
    console.log(chalk.white(body.log));
  }
  if (body.info) {
    console.log(chalk.blue(body.info));
  }
  if (body.warn) {
    console.log(chalk.yellow(body.warn));
  }
  if (body.error) {
    console.log(chalk.red(body.error));
  }
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
