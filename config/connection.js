const mysql = require("mysql");

//Set up JAWSDB on Heroku

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password123!",
    database: "burger_db",
  });
}

connection.connect((err) => {
  if (err) {
    console.error(`error connection: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
