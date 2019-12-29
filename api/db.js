const mySql = require('mySql');

const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    pasword: '12345',
    database: 'ebtekarthon'
});
// connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql Connected....')
});
