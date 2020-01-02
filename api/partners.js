const
    express = require("express"),
    router = express.Router(),
    routeBase = '/partners'  , 
     {createDatabaseConnection, DB_NAME} = require('../database/db.js');

;

router.get(routeBase + '/partners', (req, res) => {
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "*");
   
createDatabaseConnection((error, connection) => {
       if (error) {
           req.status(500);
           return;
       }

       connection.query(`SELECT * FROM ${DB_NAME}.'partner_inf' `, function (err, result) {
        if (err) throw err ; 
          res.send(result);
 }); 
});
 });


            router.delete(routeBase + '/partners/', (req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            console.log(req.body);
            let id=req.body.id;

            createDatabaseConnection((error, connection) => {
            if (error) {
                req.status(500);
                return;
            }
                connection.query(`DELETE * FROM ${DB_NAME}.'partner_inf' WHERE id IN (` + id +`)` , function (err, result) {
                if (err) throw err ; 
                return res.status(201).send(result);
                }); 
                });
                });
    
router.post(routeBase + '/partners', (req, res) => { 

   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
   console.log(req.body);
   createDatabaseConnection((error, connection) => {
      if (error) {
          req.status(500);
          return;
      }
      
   s =`INSERT INTO ${DB_NAME}.'partner_inf' ('img', 'wsite') VALUES ( '"
    + req.body.img +" ', '" + req.body.wsite +  " ' ) ;` ;
                   
     connection.query(s, function (err, result) {
      if (err) throw err;
      let n = { id :result.insertId ,
         img : req.body.img ,
          wsite : req.body.wsite
           };

      console.log(result);
 res.send(n);
 });
});
});


module.exports = router;