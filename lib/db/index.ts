import {neon, neonConfig} from '@neondatabase/serverless'
import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/neon-http';
neonConfig.fetchConnectionCache = true
config({ path: ".env" }); 

if (!process.env.DATABASE_URL){
    throw new Error('DATABASE url not found')
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined');
}
const sql = neon(databaseUrl!);


export const db = drizzle(sql)