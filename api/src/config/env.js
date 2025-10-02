import dotenv from 'dotenv';
dotenv.config();

const required = (key) => {
  const v = process.env[key];
  if (!v) throw new Error(`Missing required env: ${key}`);
  return v;
};

export const env = {
  node: process.env.NODE_ENV ?? 'development',
  port: Number(required('PORT') ?? 8080),
  dbHost: required('DATABASE_HOST') ?? 'localhost',
  dbUser: required('DATABASE_USER') ?? 'postgres',
  dbPassword: process.env.DATABASE_PASSWORD ?? '',
  dbPort: required('DATABASE_PORT') ?? '5432',
  dbName: required('DATABASE_NAME') ?? 'test-fullstack',
  jwtSecret: process.env.JWT_SECRET ?? 'my-secret-sauce',
};
