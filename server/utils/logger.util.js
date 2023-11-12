import { createLogger, format, transports } from "winston";

const logLevels = {
  info: "info",
  error: "error",
  warn: "warn",
};

/**
 * The function `createCustomLogger` creates a logger with a specified log level and formats the log
 * messages with a timestamp and pretty print format.
 * @param level - The `level` parameter is used to specify the minimum level of logs that should be
 * recorded. It can have values like "error", "warn", "info", "http", "verbose", "debug", or "silly".
 * @returns The function `createCustomLogger` returns a logger object that is created using the
 * `createLogger` function.
 */
const createCustomLogger = (level) => {
  return createLogger({
    level,
    format: format.combine(
      format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
      format.prettyPrint()
    ),
    defaultMeta: { service: "user-service" },
    transports: [
      new transports.Console(),
      new transports.File({ filename: `./logs/${level}.log`, level }),
    ],
  });
};

const allLoggers = [];

Object.keys(logLevels).forEach((level) => {
  allLoggers[level] = createCustomLogger(logLevels[level]);
});

const logger = {
  log: (level, message) => {
    if (allLoggers[level]) allLoggers[level][level](message);
  },
};

export default logger;
