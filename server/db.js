// server/db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'chatapp',
    password: 'debashis@2000',
    port: 5432,
});

module.exports = pool;
