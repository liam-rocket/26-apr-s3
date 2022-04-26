import pg from 'pg';

const { Pool } = pg;

let pgConnectionConfigs;

if (process.env.DATABASE_URL) {
  // pg will take in the entire value and use it to connect
  pgConnectionConfigs = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  // this is the same value as before
  pgConnectionConfigs = {
    user: 'yickkiuliamleung',
    host: 'localhost',
    database: 'uploads',
    port: 5432,
  };
}

const pool = new Pool(pgConnectionConfigs);

export default pool;
