const chalk = require("chalk");
const logSymbols = require("log-symbols");

const error = chalk.red.bold;
const warning = chalk.yellowBright.bold;
const server = chalk.blueBright.bold;

const logError = (message) => {
  console.log(`${logSymbols.error} ${message}`);
};

const logSuccess = (message) => {
  console.log(logSymbols.success, server(message));
};

module.exports = {
  error,
  warning,
  server,
  logError,
  logSuccess,
};
