require("dotenv").config();
const mysql = require("mysql");
const saltRounds = 10;

const host = process.env.MYSQL_HOST;
const database = process.env.MYSQL_DB;

console.log(`connecting to database ${database} on ${host}`);

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});


async function getAllItems(limit = 100) {
    const sql = `SELECT * FROM items LIMIT ?`;
    let itemsData = await pool.query(sql, [limit]);
    return itemsData;
}

function getCartById(id) {
  return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM carts WHERE id = ?";
      pool.query(sql, [id], function (err, results, fields) {
          if (err) {
              return reject(err);
          }

          return resolve(results);
      });
  });
}

function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
      // This is an alternate way to sanitize user input for the query
      const sql =
          "SELECT * FROM users WHERE username= ? " +
          pool.escape(`%${username}%`);

      pool.query(sql, [username], function (err, results, fields) {
          if (err) {
              return reject(err);
          }

          return resolve(results);
      });
  });
}

function addUser(username,email,passhash){
  return new Promise((resolve,reject)=> {
      const sql =
      "INSERT INTO users (id, username, email, passhash) values (NULL, ?, ?, ?)"
      pool.query(sql,[username,email,passhash]), function(err,fields){
        if (err){
          return reject(err);
        }
        return resolve;
      }
  });

}


module.exports = {
  getAllItems,
  getUserByUsername,
  getCartById,
  addUser
};