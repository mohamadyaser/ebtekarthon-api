const
    express = require("express"),
    router = express.Router(),
    routeBase = '/contact', 
    {createDatabaseConnection, DB_NAME} = require('../dataBase/config.js');

     const fs = require('fs');
    
 router.get(routeBase , (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");

createDatabaseConnection((error, connection) => {
       if (error) {
          //  req.status(500);
          console.log(error);
           return;
       }
       connection.query(`SELECT * FROM ${DB_NAME}.contact_inf`, function (err, result) {
        if (err) throw err ; 
        console.log(result);
         connection.end();
          res.send(result);
 }); 
});
 });

 router.delete(routeBase +'/', (req, res) => {
   // res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "*");
console.log(req.body);
let id=req.body.id;

// let id = req.params.i ; 

createDatabaseConnection((error, connection) => {
  if (error) {
      req.status(500);
      return;
  }
  connection.query(`DELETE FROM ${DB_NAME}.contact_inf  WHERE id  = `+ id , function (err, result) {
   if (err) throw err ; 
   connection.end();
    res.status(201).send(result);
}); 
});
});
    
router.post(routeBase , (req, res) => { 

   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
   console.log(req.body);
   createDatabaseConnection((error, connection) => {
      if (error) {
          // req.status(500);
          console.log(error);
          return;
      }
      let logophoto = req.body.img;
      let base64Image = logophoto.split(';base64,').pop();
      fs.writeFile("C:/Users/pc/Desktop/ebt/Ebtekarthon/images/home/logo.png", base64Image, {encoding: 'base64'}, function(err) {
          console.log('File created');
         //  console.log(err);
      });
      let imgpath = "C:/Users/pc/Desktop/ebt/Ebtekarthon/images/home/logo.png"
    console.log(imgpath);
    
      
   s =`INSERT INTO ${DB_NAME}.contact_inf (name,position,mobile,email,img) VALUES ( '`+req.body.name +"' ,'" + req.body.position +"' ,'" +req.body.mobile +"' ,'" + req.body.email + " ', ' " + imgpath+" ');"
                   
     connection.query(s, function (err, result) {
      if (err) throw err;
      let n = { id :result.insertId ,
         name : req.body.name ,
          position : req.body.position                                                                       
          , mobile : req.body.mobile ,
           email : req.body.email  ,
         img : imgpath};
      console.log(n);
      connection.end();
 res.send(n);
 });                                                                                   

});
});
module.exports = router;
