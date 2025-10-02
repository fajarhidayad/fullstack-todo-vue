import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from './config/env.js';

const DB_URL = `postgresql://${env.dbUser}:${env.dbPassword}@${env.dbHost}:${env.dbPort}/${env.dbName}`;
export const db = drizzle(DB_URL);
