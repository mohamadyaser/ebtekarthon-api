const
    express = require("express"),
    router = express.Router(),
    fs = require('fs'),
    routeBase = '/partners',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../dataBase/config.js');


router.get(routeBase, (req, res) => {
    createDatabaseConnection((error, connection) => {
        if (error) {
            res.status(500);
            return;
        }
        connection.query(`SELECT * FROM ${DB_NAME}.partner_inf `, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
});


router.delete(routeBase + "/", (req, res) => {
    let id = req.body.id;
    createDatabaseConnection((error, connection) => {
        if (error) {
            res.status(500);
            return;
        }
        connection.query(`DELETE FROM ${DB_NAME}.partner_inf WHERE id =` + id, function (err, result) {
            if (err) throw err;
            res.status(200).send(result);
        });
    });
});

router.post(routeBase, (req, res) => {
    let logophoto = req.body.photo; 
    let base64Image = logophoto.split(';base64,').pop();
    let imgpath = "/images/partner/"+Math.floor(Math.random() * 10000000) + 1+".png";
    let fullpath = process.cwd() +imgpath;
    fs.writeFile(fullpath, base64Image, {encoding: 'base64'}, function(err) {
        // console.log('File created');
        // console.log(err);
    });

    createDatabaseConnection((error, connection) => {
        if (error) {
            res.status(500);
            return;
        }
        
        s = `INSERT INTO ${DB_NAME}.partner_inf (img,wsite) VALUES ('${imgpath}','${req.body.wsite}');`;
        connection.query(s, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
});


module.exports = router;