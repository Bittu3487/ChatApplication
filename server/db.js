// server/db.js
const { Pool } = require('pg');
const {env} = require('dotenv');

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password:process.env.PASSWORD ,
    port: process.env.PORT,
});

module.exports = pool;
