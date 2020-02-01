const express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    routeBase = '/speaker',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../dataBase/config.js');

    router.use(bodyParser.json());
    router.use(express.json());

    
router.post(routeBase, (req, res) => {
    let logophoto = req.body.photo;
    let base64Image = logophoto.split(',base64,;').pop();
    let imgpath = "/images/speaker/"+Math.floor(Math.random() * 10000000) + 1+".png";
    let fullpath = process.cwd() +imgpath;
    fs.writeFile( fullpath , base64Image, {
        encoding: 'base64'
    }, function (err) {
        // console.log('File created');
        // console.log(err);
    });
    console.log(process.cwd());

    createDatabaseConnection((error, connection) => {
        if (error) {
            // console.log(error);
            res.status(500);
            return;
        }

        let sql = `INSERT INTO ${DB_NAME}.speaker_inf (name,position,email,bio,img) VALUES ('`+req.body.name+`','`+req.body.position+`', '`+req.body.email+`','`+req.body.BIO+`','`+imgpath+`');`;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            // console.log(result);

            connection.end();
            res.send(result);
        });
    });
});

router.delete(routeBase + '/', (req, res) => {
    let id = req.body.id;
    createDatabaseConnection((error, connection) => {
        if (error) {
            res.status(500);
            return;
        }
        connection.query(`DELETE FROM ${DB_NAME}.speaker_inf WHERE id =` + id, function (err, result) {
            console.log("hi2");
            if (err) {
                req.status(500);
                return;
            }
            connection.end();
            res.status(200).send("hiiii");
        });
    });
});


router.get(routeBase, (req, res) => {
    console.log("hi");
    createDatabaseConnection((error, connection) => {
        if (error) {
            res.status(500)
            return;
        }
        connection.query(`SELECT * FROM  ${DB_NAME}.speaker_inf`, function (err, result) {
            if (err) throw err;
            console.log(result);
            connection.end();
            res.send(result);
        });
    });
});

router.get(routeBase+"/:id", (req, res) => {

    let id = req.params.id;
    createDatabaseConnection((error, connection) => {
        if (error) {
            req.status(500)
            return;
        }
        connection.query(`SELECT * FROM  ${DB_NAME}.speaker_inf WHERE id =`+ id , function (err, result) {
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