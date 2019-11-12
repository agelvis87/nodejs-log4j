require("./config/config");

const express = require("express");
const { log4js } = require("./config/log4j.config");

const app = express();

const log = log4js.getLogger("Server");

app.get("/example-log4j", (req, res) => {
  log.trace("Trace");
  log.debug("Debug", "otra cosa");
  log.info("Info");
  log.warn("Warn");
  log.error("Error");
  log.fatal("Fatal");

  res.json({
    message: "OK"
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server Up, Listen Port: ", process.env.PORT);
});
