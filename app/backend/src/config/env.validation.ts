import { registerAs } from '@nestjs/config';
import Joi from 'joi';

// --- Global Validation Schema ---
export const validationSchema = Joi.object({
  // --- App Configuration ---
  FRONTEND_URL: Joi.string()
    .default('http://localhost:3000')
    .description('URL of the frontend application.'),
  APP_NAME: Joi.string()
    .default('Digital Waste Bank Backend')
    .description('Name of this backend service.'),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development')
    .description('Application environment mode.'),
  LOG_LEVEL: Joi.string()
    .default('debug')
    .description('Logging level for the application.'),
  PORT: Joi.number()
    .default(3000)
    .description('Port on which the backend server will listen.'),
  OBSERVE_APP_KEY: Joi.string()
    .required()
    .description('NestJS Observe application key for telemetry.'),
  OBSERVE_APP_SECRET: Joi.string()
    .required()
    .description('NestJS Observe application secret for telemetry.'),
  OBSERVE_SERVICE_ID: Joi.string()
    .default('backend')
    .description('Service ID for NestJS Observe telemetry.'),

  // --- Database Configuration ---
  DATABASE_URL: Joi.string()
    .required()
    .description('PostgreSQL connection string.'),

  // --- Authentication (JWT) Configuration ---
  JWT_SECRET: Joi.string()
    .required()
    .description('Secret key for JWT access tokens.'),
  JWT_EXPIRES_IN: Joi.string()
    .default('1h')
    .description('Expiration time for JWT access tokens.'),
  JWT_REFRESH_SECRET: Joi.string()
    .required()
    .description('Secret key for JWT refresh tokens.'),
  JWT_REFRESH_EXPIRES_IN: Joi.string()
    .default('7d')
    .description('Expiration time for JWT refresh tokens.'),

  // --- Cookie Configuration ---
  REFRESH_TOKEN_COOKIE_NAME: Joi.string()
    .default('refresh_token')
    .description('Name of the refresh token cookie.'),
  COOKIE_HTTP_ONLY: Joi.boolean()
    .default(true)
    .description('Whether the refresh token cookie is HttpOnly.'),
  COOKIE_SECURE: Joi.boolean()
    .default(false)
    .description('Whether the refresh token cookie is Secure (HTTPS only).'),
  COOKIE_SAME_SITE: Joi.string()
    .valid('strict', 'lax', 'none')
    .default('lax')
    .description('SameSite policy for the refresh token cookie.'),
  DOMAIN: Joi.string()
    .default('localhost')
    .description('Domain for which the refresh token cookie is valid.'),

  // --- Cloudinary Configuration ---
  CLOUDINARY_NAME: Joi.string()
    .required()
    .description('Cloudinary cloud name.'),
  CLOUDINARY_API_KEY: Joi.string()
    .required()
    .description('Cloudinary API key.'),
  CLOUDINARY_API_SECRET: Joi.string()
    .required()
    .description('Cloudinary API secret.'),

  // --- Mailer Configuration ---
  MAIL_HOST: Joi.string().required().description('Mail server host.'),
  MAIL_PORT: Joi.number().default(587).description('Mail server port.'),
  MAIL_USER: Joi.string().required().description('Mail server username.'),
  MAIL_PASSWORD: Joi.string().required().description('Mail server password.'),

  // --- Redis Configuration ---
  REDIS_HOST: Joi.string()
    .default('localhost')
    .description('Redis server host.'),
  REDIS_PORT: Joi.number().default(6379).description('Redis server port.'),
  REDIS_PASSWORD: Joi.string()
    .allow('')
    .optional()
    .description('Redis server password.'),
  // --- Feature Flags ---
  PHOTO_ASYNC: Joi.boolean()
    .truthy('true')
    .falsy('false')
    .empty('')
    .default(true)
    .description('Upload photos asynchronously via BullMQ queue.'),
});

// --- Configuration Loader Functions ---

export const appConfig = registerAs('app', () => ({
  frontendUrl: process.env.FRONTEND_URL,
  appName: process.env.APP_NAME,
  nodeEnv: process.env.NODE_ENV,
  logLevel: process.env.LOG_LEVEL,
  port: Number(process.env.PORT),
  observeAppKey: process.env.OBSERVE_APP_KEY,
  observeAppSecret: process.env.OBSERVE_APP_SECRET,
  observeServiceId: process.env.OBSERVE_SERVICE_ID,
}));

export const databaseConfig = registerAs('database', () => ({
  url: process.env.DATABASE_URL,
}));

export const authConfig = registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  refreshSecret: process.env.JWT_REFRESH_SECRET,
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
}));

export const cookieConfig = registerAs('cookie', () => ({
  refreshTokenName: process.env.REFRESH_TOKEN_COOKIE_NAME,
  httpOnly: process.env.COOKIE_HTTP_ONLY === 'true',
  secure: process.env.COOKIE_SECURE === 'true',
  sameSite: process.env.COOKIE_SAME_SITE as 'strict' | 'lax' | 'none',
  domain: process.env.DOMAIN,
}));

export const cloudinaryConfig = registerAs('cloudinary', () => ({
  name: process.env.CLOUDINARY_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
}));

export const mailConfig = registerAs('mail', () => ({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  user: process.env.MAIL_USER,
  password: process.env.MAIL_PASSWORD,
}));

export const redisConfig = registerAs('redis', () => ({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
}));

// --- Combined AppConfig Interface ---
export interface AppConfig {
  app: ReturnType<typeof appConfig>;
  database: ReturnType<typeof databaseConfig>;
  auth: ReturnType<typeof authConfig>;
  cookie: ReturnType<typeof cookieConfig>;
  cloudinary: ReturnType<typeof cloudinaryConfig>;
  mail: ReturnType<typeof mailConfig>;
  redis: ReturnType<typeof redisConfig>;
}
