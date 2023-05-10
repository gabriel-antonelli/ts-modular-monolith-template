import dotenv from 'dotenv';
import path from 'path';

const root = path.join.bind(this, __dirname, '.');
dotenv.config({ path: root('.env') });
