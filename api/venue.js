const
    express = require("express"),
    router = express.Router(),
    routeBase = '/venue',
    {createDatabaseConnection, DB_NAME} = require('../dataBase/config.js');


router.put(routeBase +"/:id" , (req, res) => { 
    let id=req.params.id;
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
   console.log(req.body);
   createDatabaseConnection((error, connection) => {
      if (error) {
          req.status(500);
          return;
      }
      
   s =`UPDATE ${DB_NAME}.venue SET {namevenue =  ${req.body.venue} , phone = ${req.body.phone} , email = ${req.body.email} } WHERE id =${id} ;`
              
     connection.query(s, function (err, result) {
      if (err) throw err;
      console.log(result);
      connection.end();
 res.send(result);
 });
});
});
module.exports = router;
