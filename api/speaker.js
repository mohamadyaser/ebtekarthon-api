const express = require('express');
router = express.Router(),
    routeBase = '/speaker',
    {createDatabaseConnection, DB_NAME} = require('../dataBase/config.js');
    router.post(routeBase, (req, res) => {
        createDatabaseConnection((error, connection) => {
            if (error) {
                req.status(500);
                return;
            }
            
        connection.query(`INSERT INTO ${DB_NAME}.speaker_inf (name,position,email,bio) VALUES ('`+ req.body.name +`' , '`+req.body.position +`' , '`+req.body.email +`' , '`+req.body.BIO + `');`, function (err, result) {
            if (err) throw err;
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            console.log(result);
            connection.end();
            res.send(result);
        });
    });
})
router.get(routeBase, (req, res) => {
    createDatabaseConnection((error, connection) => {
        if (error) {
            req.status(500)
            return;
        }
        connection.query(`SELECT * FROM  ${DB_NAME}.speaker_inf `, function (err, result) {
        if (err) throw err;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        console.log(result);
        connection.end();
        res.send(result);
    });
});
});
module.exports = router;
