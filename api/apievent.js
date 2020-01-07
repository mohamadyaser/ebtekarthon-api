const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const mysql = require('mysql');
router.use(bodyParser.json());
router.use(express.json());
const fs = require('fs');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database : "ebtekarthon"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });




  //logo
  router.put( '/event' , ( req , res ) =>{
    let logophoto = req.body.photo; 
    let base64Image = logophoto.split(';base64,').pop();

    fs.writeFile("C:/Users/pc/Desktop/final/Ebtekarthon/images/logos/logo.png", base64Image, {encoding: 'base64'}, function(err) {
        console.log('File created');
        console.log(err);
    });
    let imgpath = "C:/Users/pc/Desktop/final/Ebtekarthon/images/logos/logo.png"
console.log(imgpath);

    const sql = `UPDATE ebtekarthon_event SET headerlogo = '${imgpath}' WHERE id = 1 ;` ;
    con.query(sql, function(err,result){
        console.log(err);
        console.log(result);
        res.send(result)
    });
} );

router.get('/event', (req, res )=> {
  const sql = `SELECT headerlogo FROM ebtekarthon_event WHERE id = 1;`;
  console.log(sql);
  con.query(sql, function(err,result){
    console.log(err);
    console.log(result);
    res.send(result)
});
})


// home
router.put( '/home' , ( req , res ) =>{
  let logophoto = req.body.photo; 
  let base64Image = logophoto.split(';base64,').pop();
  fs.writeFile("C:/Users/pc/Desktop/final/Ebtekarthon/images/home/logo.png", base64Image, {encoding: 'base64'}, function(err) {
      console.log('File created');
      console.log(err);
  });
  let imgpath = "C:/Users/pc/Desktop/final/Ebtekarthon/images/home/logo.png"
console.log(imgpath);

  const sql = `UPDATE ebtekarthon_event SET homeimg = '${imgpath}', hometitle = '${req.body.title}', homelocation = '${req.body.location}', homedate = '${req.body.date}'  WHERE id = 1 ;` ;
  con.query(sql, function(err,result){
      console.log(err);
      console.log(result);
      res.send(result)
  });
} );
router.get('/home', (req, res )=> {
  const sql = `SELECT homeimg , hometitle, homelocation , homedate FROM ebtekarthon_event WHERE id = 1;`;
  console.log(sql);
  con.query(sql, function(err,result){
    console.log(err);
    console.log(result);
    res.send(result)
});
})



//about
router.put( '/about' , ( req , res ) =>{
  const sql = `UPDATE ebtekarthon_event SET aboutdescr = '${req.body.description}', aboutvidoe = '${req.body.vidoe}'  WHERE id = 1 ;` ;
  con.query(sql, function(err,result){
      console.log(err);
      console.log(result);
      res.send(result)
  });
} );
router.get('/about', (req, res )=> {
  const sql = `SELECT aboutdescr, aboutvidoe FROM ebtekarthon_event WHERE id = 1;`;
  console.log(sql);
  con.query(sql, function(err,result){
    console.log(err);
    console.log(result);
    res.send(result)
});
})



//contINF
router.put( '/contINF' , ( req , res ) =>{
  const sql = `UPDATE ebtekarthon_event SET location = '${req.body.location}', numphone = '${req.body.numphone}', email = '${req.body.email}'  WHERE id = 1 ;` ;
  con.query(sql, function(err,result){
      console.log(err);
      console.log(result);
      res.send(result)
  });
} );
router.get('/contINF', (req, res )=> {
  const sql = `SELECT location, numphone , email FROM ebtekarthon_event WHERE id = 1;`;
  console.log(sql);
  con.query(sql, function(err,result){
    console.log(err);
    console.log(result);
    res.send(result)
});
})
module.exports = router