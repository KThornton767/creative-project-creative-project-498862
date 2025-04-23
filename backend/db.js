require("dotenv").config();
const mysql = require("mysql");

const host = process.env.MYSQL_HOST;
const database = process.env.MYSQL_DB;

console.log(`connecting to database ${database} on ${host}`);

const connection = mysql.createConnection({
  host: process.env.MYSQL,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

// Make the connection
connection.connect(function (err) {
  // Check if there is a connection error
  if (err) {
      console.log("connection error", err.stack);
      return;
  }

  // If there was no error, print this message
  console.log(`connected to database`);
});

//const sql = "SELECT * FROM users";
//connection.query(sql, function (err, results, fields) {
//    if (err) throw err;

//    console.log("here are your results", results);
//});

// connection.end();
