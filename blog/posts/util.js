const chalk = require("chalk");

const error = chalk.red.bold;
const warning = chalk.yellowBright.bold;
const server = chalk.blueBright.bold;

module.exports = {
  error,
  warning,
  server,
};
