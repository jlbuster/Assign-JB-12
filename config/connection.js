const mysql = require('mysql2')

const defaultConfig = {
  host: 'localhost',
  user: 'root',
  password: 'HeatLight2Cage',
  database: 'burgers_db'
}

module.exports = mysql.createConnection(defaultConfig).promise()