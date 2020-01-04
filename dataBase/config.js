const mySql = require('mysql'),
        express = require("express"),
      DB_NAME = 'ebtekarthon';

function createDatabaseConnection(callback) {
    const connection = mySql.createConnection({
        host: 'localhost',
        user: 'root',
      //  password: '12345'
      password : "1234"
       , database: DB_NAME
    });
    // connect
    connection.connect((err) => {
        if (callback) {
            callback(err, connection);
        }
    });
}

module.exports = {
    createDatabaseConnection,
    DB_NAME
};
