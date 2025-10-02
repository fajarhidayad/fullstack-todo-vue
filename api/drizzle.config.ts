import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { env } from './src/config/env';

const DB_URL = `postgresql://${env.dbUser}:${env.dbPassword}@${env.dbHost}:${env.dbPort}/${env.dbName}`;
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: DB_URL,
  },
});
