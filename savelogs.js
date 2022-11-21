const fs = require("fs");

const logsDir = "./logs";
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

function dateStringToday() {
  return new Date().toISOString().split("T")[0];
}

function saveLog(logObj) {
  let path = `${logsDir}/${dateStringToday()}.txt`;
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, logObjToStr(logObj), "utf-8");
  } else {
    fs.appendFileSync(path, logObjToStr(logObj), "utf-8");
  }
}

function logObjToStr(logObj) {
  let s = "";
  let time = new Date().toLocaleString();
  time = time.padEnd(26, " ");
  if (logObj.log) {
    s += `${time}LOG:   ${logObj.log}\n`;
  }
  if (logObj.info) {
    s += `${time}INFO:  ${logObj.info}\n`;
  }
  if (logObj.warn) {
    s += `${time}WARN:  ${logObj.warn}\n`;
  }
  if (logObj.error) {
    s += `${time}ERROR: ${logObj.error}\n`;
  }
  return s;
}

module.exports.saveLog = saveLog;
