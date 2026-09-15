import 'winston-daily-rotate-file';

import winston from 'winston';
import path from 'path';

type WinstonInfo = {
  timestamp: string;
  level: string;
  message: string;
  context?: string;
  stack?: string;
  [key: string]: unknown;
};

const timestampFormat = winston.format.timestamp({
  format: 'YYYY-MM-DD HH:mm:ss',
});

const fileFormat = winston.format.combine(
  timestampFormat,
  winston.format.errors({ stack: true }),
  winston.format.printf((info) => {
    const { timestamp, level, message, context, stack, ...meta } =
      info as WinstonInfo;
    const ctx = context ? `[${context}] ` : '';

    let metaStr = '';
    try {
      const cleanMeta = Object.fromEntries(
        Object.entries(meta).filter(([_, v]) => v !== undefined && v !== null),
      );
      metaStr = Object.keys(cleanMeta).length
        ? ` | ${JSON.stringify(cleanMeta)}`
        : '';
    } catch {
      metaStr = ' | [Unparseable Meta]';
    }

    const stackStr = stack ? `\n${stack}` : '';

    return `[${timestamp}] ${level.toUpperCase()} ${ctx}${message}${metaStr}${stackStr}`;
  }),
);

const IGNORED_META_KEYS = [
  'service',
  'environment',
  'context',
  'method',
  'url',
  'statusCode',
  'duration',
  'ip',
  'userAgent',
];

export const consoleFormat = winston.format.combine(
  timestampFormat,
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => {
    const { timestamp, level, message, context, ...meta } = info as WinstonInfo;
    const ctx = context ? `[${context}] ` : '';
    const cleanMeta = Object.fromEntries(
      Object.entries(meta).filter(([key]) => !IGNORED_META_KEYS.includes(key)),
    );

    const metaStr = Object.keys(cleanMeta).length
      ? ` | ${JSON.stringify(cleanMeta)}`
      : '';

    return `[${timestamp}] ${level.toUpperCase()} ${ctx}${message}${metaStr}`;
  }),
);

const logDir = path.resolve(process.cwd(), 'logs');

export const consoleTransport = new winston.transports.Console({
  level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
  format: consoleFormat,
});

export const combinedFileTransport = new winston.transports.DailyRotateFile({
  dirname: path.join(logDir, 'combined'),
  filename: 'combined-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d',
  format: fileFormat,
});

export const errorFileTransport = new winston.transports.DailyRotateFile({
  dirname: path.join(logDir, 'error'),
  filename: 'error-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  level: 'error',
  maxFiles: '30d',
  format: fileFormat,
});
