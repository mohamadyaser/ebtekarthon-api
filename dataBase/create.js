const mySql = require('mySql'),
        express = require("express"),
      DB_NAME = 'ebtekarthon';

function createDatabaseConnection(callback) {
    const connection = mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: DB_NAME
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

