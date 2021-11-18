const Pool = require('pg').Pool;
const { database } = require('./config/conec');


const pool = new Pool(database);

console.log("database is connected")

module.exports = pool;