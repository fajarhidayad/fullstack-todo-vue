import dotenv from 'dotenv';
import app from './src/app.js';
import { env } from './src/config/env.js';

dotenv.config();

const PORT = env.port;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
