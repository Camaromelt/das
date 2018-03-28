const { Client } = require('pg');
const uri = 'postgres://nkaimfqe:ouByPGtt7SnBVOIGlMH_wduY-DrgNV1X@baasu.db.elephantsql.com:5432/nkaimfqe';
const db = new Client({
  connectionString: uri,
});
db.connect();

module.exports = db;
