const { createPool } = require("mysql");

const pool = createPool({
  port: process.env.HOST_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_MYSQL,
  connectionLimit: 10,
});

module.exports = pool;
