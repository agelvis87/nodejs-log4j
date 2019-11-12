const log4js = require("log4js");
const FILE_NAME = "example";

// Documentacion
// https://log4js-node.github.io/log4js-node/

log4js.configure({
  appenders: {
    example: {
      type: "dateFile",
      filename: FILE_NAME + ".log"
    }
  },
  categories: {
    default: {
      appenders: [FILE_NAME],
      level: process.env.LOGGER_LEVEL
    }
  }
});

module.exports = { log4js };
