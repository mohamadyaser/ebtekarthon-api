const
  express = require("express"),
   bodyParser = require('body-parser'),
  router = express.Router(),
  routeHome = '/home', 
  routeAbout = '/about' ,
  routeBaselogo ="/event" , 
  routeVenue = "/contINF",
  {createDatabaseConnection, DB_NAME} = require('../dataBase/config.js');
router.use(bodyParser.json());
router.use(express.json());
   const fs = require('fs');
//logo
router.put(routeBaselogo, (req, res) => {
  createDatabaseConnection((error, connection) => {
    if (error) {
       //  req.status(500);
       console.log(error);
        return;
    }
      let logophoto = req.body.photo;
      let base64Image = logophoto.split(';base64,').pop();
      let imgpath = "/images/logos/logo.png";
      let fullpath = process.cwd() + imgpath;
      console.log(fullpath);
      fs.writeFile(fullpath, base64Image, {
        encoding: 'base64'
      }, function (err) {});
      const sql = `UPDATE ${DB_NAME}.ebtekarthon_event SET headerlogo = '`+imgpath+`' WHERE id = 1 ;`;
      connection.query(sql, function (err, result) {
        console.log(result);
      connection.end();
        res.send(result)
      });});});
router.get(routeBaselogo,(req, res) => {
  createDatabaseConnection((error, connection) => {
    if (error) {
       //  req.status(500);
       console.log(error);
        return;
    }
      const sql = `SELECT headerlogo FROM ${DB_NAME}.ebtekarthon_event WHERE id = 1;`;
      connection.query(sql, function (err, result) {
        console.log(result);
      connection.end();
        res.send(result)
      });});});
//contINF
router.put(routeVenue , (req, res) => {
  createDatabaseConnection((error, connection) => {
    if (error) {
       //  req.status(500);
       console.log(error);
        return;
    }
      const sql = `UPDATE ebtekarthon_event SET location ='${req.body.location}', numphone ='${req.body.phone}', email ='${req.body.email}'  WHERE id = 1 ;`;
      connection.query(sql, function (err, result) {
        console.log(err);
        console.log(result);
        connection.end();
        res.send(result)
      });});});
router.get(routeVenue , (req, res) => {
  createDatabaseConnection((error, connection) => {
    if (error) {
       //  req.status(500);
       console.log(error);
        return;
    }
      const sql = `SELECT location,numphone,email FROM ${DB_NAME}.ebtekarthon_event WHERE id = 1;`;
      console.log(sql);
      connection.query(sql, function (err, result) {
        console.log(err);
        console.log(result);
        connection.end();
        res.send(result)
      });})})
// home
router.put( routeHome, ( req , res ) =>{
  createDatabaseConnection((error, connection) => {
    if (error) {
       //  req.status(500);
       console.log(error);
        return;
    }
  let logophoto = req.body.photo; 
  let base64Image = logophoto.split(';base64,').pop();
  let imgpath = "/images/home/logo.png";
  let fullpath = process.cwd() + imgpath;
  console.log("fullpath is " , fullpath);
  fs.writeFile(fullpath, base64Image, {encoding: 'base64'}, function(err) {
      console.log('File created');
      console.log(err);
  });

const sql =`UPDATE ${DB_NAME}.ebtekarthon_event SET homeimg="`+imgpath+`", hometitle='`+req.body.title + `', homelocation='` +req.body.location+`', homedate='`+req.body.date+ `' WHERE id='1'`;

  connection.query(sql, function(err,result){ 
      console.log(result);
      connection.end();
      res.send(result)
  });} );});
router.get(routeHome , (req, res )=> {
  createDatabaseConnection((error, connection) => {
    if (error) {
       //  req.status(500);
       console.log(error);
        return;
    }
const sql = `SELECT homeimg ,hometitle , homelocation , homedate  FROM ${DB_NAME}.ebtekarthon_event where id = 1 ;`;
  console.log(sql);
  connection.query(sql, function(err,result){
    console.log(result);
    connection.end();
    res.send(result)
});})});
//about
router.put( routeAbout, ( req , res ) =>{
    createDatabaseConnection((error, connection) => {
        if (error) {
           //  req.status(500);
           console.log(error);
            return;
        }
  const sql = `UPDATE ${DB_NAME}.ebtekarthon_event SET aboutdescr='`+ req.body.description+` ' , aboutvidoe='` +req.body.vidoe +`'  WHERE id='1'`;

  connection.query(sql, function(err,result){
      console.log(result);
      connection.end();
      res.send(result)
  });} );});
router.get(routeAbout, (req, res )=> {
    createDatabaseConnection((error, connection) => {
        if (error) {
           //  req.status(500);
           console.log(error);
            return;
        }
  
  const sql = `SELECT aboutdescr, aboutvidoe FROM ${DB_NAME}.ebtekarthon_event WHERE id = 1;`;
  console.log(sql);
  connection.query(sql, function(err,result){
    console.log(result);
    connection.end();
    res.send(result)
});})});
 // function verifyToken(req, res, next) {
//   // Get auth header value
//   const bearerHeader = req.headers['authorization'];
//   // Check if bearer is undefined
//   if (typeof bearerHeader !== 'undefined') {
//     // Split at the space
//     const bearer = bearerHeader.split(' ');
//     // Get token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleware
//     next();
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }

// }

module.exports = router;