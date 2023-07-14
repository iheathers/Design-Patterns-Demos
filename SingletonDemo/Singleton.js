const fs = require("node:fs");

class Logger {

  logFile;

  constructor() {
    this.logFile = fs.openSync("app.log", "w");
  }

  info(message) {
    fs.writeSync(this.logFile, `INFO: ${message}`);
  }

  warn(message) {
    fs.writeSync(this.logFile, `WARN: ${message}`);

  }

  error(message) {
    fs.writeSync(this.logFile, `ERROR: ${message}`);

  }

  close() {
    console.log(this.logFile);
  }
}

const log = new Logger();
log.warn("This is a warning");
log.close();