const
    express = require("express"),
    router = express.Router(),
    routeBase = '/socialMedia', 
    {createDatabaseConnection, DB_NAME} = require('../dataBase/config.js');

  
    
 router.get(routeBase , (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");

createDatabaseConnection((error, connection) => {
       if (error) {
          //  req.status(500);
          console.log(error);
           return;
       }
       connection.query(`SELECT * FROM ${DB_NAME}.social_media`, function (err, result) {
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

createDatabaseConnection((error, connection) => {
  if (error) {
      req.status(500);
      return;
  }
  connection.query(`DELETE FROM ${DB_NAME}.social_media  WHERE id  = `+ id , function (err, result) {
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
      
      
   s =`INSERT INTO ${DB_NAME}.social_media (wsite,ebt_id,img) VALUES ( '`+req.body.wsite +"' ,'" + req.body.idEbte+"' ,'" +req.body.img +" ');"
  
     connection.query(s, function (err, result) {
      if (err) throw err;
      let n = { id :result.insertId ,
         wsite : req.body.wsite ,
         idEbte :req.body.idEbte ,
         img : req.body.img
        };
      console.log(n);
      connection.end();
 res.send(n);
 });                                                                                   

});
});
module.exports = router;
