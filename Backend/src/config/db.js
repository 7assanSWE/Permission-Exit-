require('dotenv').config({path: '../.env'}) // Load environment variables from .env file
const mysql = require('mysql2/promise'); // MySQL connection

// Environment variables
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME || 'db'


// Database connection
const pool = mysql.createPool({
  host: DB_HOST || 'localhost',
  user: DB_USER || 'root',
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true, 
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection to the database
pool.getConnection()
  .then(connection => {
    console.log('Database connected successfully');
    connection.release(); // Release the connection back to the pool
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

module.exports = pool; // Export the pool for use in other modules
