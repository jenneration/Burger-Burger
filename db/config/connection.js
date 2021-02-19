//Set MySql connection
const mysql = require("mysql");

const connection = mysql.create.Connection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db',
});

//Make connection
connection.connect((err) => {
    if (err) {
        console.error(`error connection: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`)
});

//Export to ORM
module.exports = connection;