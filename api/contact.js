const
    express = require("express"),
    router = express.Router(),
    routeBase = '/contact',
    {createDatabaseConnection, DB_NAME} = require('../database/db.js');

 router.get(routeBase + '/contact', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
console.log(req.body);

createDatabaseConnection((error, connection) => {
       if (error) {
           req.status(500);
           return;
       }
       connection.query(`SELECT * FROM ${DB_NAME}.'contact_inf' `, function (err, result) {
        if (err) throw err ; 
          res.send(result);
 }); 
});
 });

 router.delete(routeBase + '/contact/', (req, res) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
console.log(req.body);
let id=req.body.id;

createDatabaseConnection((error, connection) => {
  if (error) {
      req.status(500);
      return;
  }
  connection.query(`DELETE * FROM ${DB_NAME}.'contact_inf' WHERE id IN (` + id +`)` , function (err, result) {
   if (err) throw err ; 
   return res.status(201).send(result);
}); 
});
});
    
router.post(routeBase + '/contact', (req, res) => { 

   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
   console.log(req.body);
   createDatabaseConnection((error, connection) => {
      if (error) {
          req.status(500);
          return;
      }
      
   s =`INSERT INTO ${DB_NAME}.'contact_inf' ('name', 'position', 'email', 'bio') VALUES ( '"
    + req.body.name +" ', '" + req.body.position +  "', '"
     + req.body.mobile  +"' , '" + req.body.email + " ' ) ;` ;
                   
     connection.query(s, function (err, result) {
      if (err) throw err;
      let n = { id :result.insertId ,
         name : req.body.name ,
          position : req.body.position 
          , mobile : req.body.mobile ,
           email : req.body.email  };

      console.log(result);
 res.send(n);
 });
});
});
module.exports = router;
