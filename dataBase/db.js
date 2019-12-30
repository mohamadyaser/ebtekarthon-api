const mySql = require('mySql'),
       express = require("express"),    
       router = express.Router();

 const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'ebtekarthon'
});
// connect
db.connect((err) => {
    if (err){
        throw err}
    console.log('Mysql Connected....')
});

module.exports = router;

// it's not complated, work on single page database, I'm work on it.