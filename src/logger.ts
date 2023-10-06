import winston from 'winston';

const env = process.env.NODE_ENV;

const consoleTransport = new winston.transports.Console({
  level: env === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    env === 'production'
      ? winston.format.uncolorize()
      : winston.format.colorize(),
    winston.format.splat(),
    winston.format.timestamp()
  ),
});

const logger = winston.createLogger();
logger.add(consoleTransport);

export default logger;
