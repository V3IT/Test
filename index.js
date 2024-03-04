const mysql = require('mysql2');
const sql = require('mssql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_DATABASE_HOST,
  user: process.env.MYSQL_DATABASE_USER,
  password: process.env.MYSQL_DATABASE_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME
});

const config = {
  user: process.env.MSSQL_DATABASE_USER,
  password: process.env.MSSQL_DATABASE_PASSWORD,
  server: process.env.MSSQL_DATABASE_SERVER,
  database: process.env.MSSQL_DATABASE_NAME,
  options: {
    encrypt: false
  }
};

sql.connect(config)
.then(pool => { console.log('Connected to SQL Server'); return; })
.catch(err => { console.error('Error connecting to SQL Server:', err); });

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});