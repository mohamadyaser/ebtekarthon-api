const
  express = require("express"),
  router = express.Router(),
  routeBase = '/contact',
  {
    createDatabaseConnection,
    DB_NAME
  } = require('../dataBase/config.js'),
  fs = require('fs');

router.get(routeBase, (req, res) => {
  createDatabaseConnection((error, connection) => {
    if (error) {
      res.status(500);
      console.log(error);
      return;
    }
    connection.query(`SELECT * FROM ${DB_NAME}.contact_inf`, function (err, result) {
      if (err) throw err;
      console.log(result);
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
    connection.query(`DELETE FROM ${DB_NAME}.contact_inf  WHERE id  = ` + id, function (err, result) {
      if (err) throw err;
      connection.end();
      res.status(201).send(result);
    });
  });
});

router.post(routeBase, (req, res) => {
  createDatabaseConnection((error, connection) => {
    if (error) {
      res.status(500);
      console.log(error);
      return;
    }
    let logophoto = req.body.photo;
    let base64Image = logophoto.split(';base64,').pop();
    let imgpath = "/images/contact/"+Math.floor(Math.random() * 10000000) + 1+".png";
    let fullpath = process.cwd() +imgpath;
    
    fs.writeFile(fullpath, base64Image, {
      encoding: 'base64'
    }, function (err) {
      // console.log('File created');
      //  console.log(err);
    });
  
    let s = `INSERT INTO ${DB_NAME}.contact_inf (name,position,mobile,email,img) VALUES ( '${req.body.name}' ,'${req.body.position}','${req.body.mobile}','${req.body.email}','${imgpath}');`
    connection.query(s, function (err, result) {
      if (err) throw err;
     
      connection.end();
      res.send(result);
    });

  });
});
module.exports = router;