const
    express = require("express"),
    router = express.Router(),
    routeBase = '/venue',
    {createDatabaseConnection, DB_NAME} = require('../dataBase/config.js');

 router.get(routeBase , (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
console.log(req.body);

createDatabaseConnection((error, connection) => {
       if (error) {
           req.status(500);
           return;
       }
       connection.query(`SELECT * FROM ${DB_NAME}.'venue' `, function (err, result) {
        if (err) throw err ; 
        connection.end();
          res.send(result);
 }); 
});
 });

 router.delete(routeBase + '/', (req, res) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
console.log(req.body);
let id=req.body.id;

createDatabaseConnection((error, connection) => {
  if (error) {
      req.status(500);
      return;
  }
  connection.query(`DELETE * FROM ${DB_NAME}.'venue' WHERE id IN (${id})` , function (err, result) {
   if (err) throw err ; 
   connection.end();
   return res.status(201).send(result);
}); 
});
});
    
router.post(routeBase , (req, res) => { 

   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
   console.log(req.body);
   createDatabaseConnection((error, connection) => {
      if (error) {
          req.status(500);
          return;
      }
      
   s =`INSERT INTO ${DB_NAME}.venue (namevenue,phone,email) VALUES ( 
    ${req.body.venue},${req.body.phone},${req.body.email});`
                   
     connection.query(s, function (err, result) {
      if (err) throw err;
      console.log(result);
      connection.end();
 res.send(result);
 });
});
});
module.exports = router;
