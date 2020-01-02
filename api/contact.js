const
    express = require("express"),
    router = express.Router(),
    routeBase = '/contact'
;
 router.get(routeBase + '/contact', (req, res) => {
    con.query("SELECT * FROM  `ebtekarthon`.`contact_inf` ", function (err, result) {
        if (err) throw err ; 
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
          res.send(result);
 }); 
});
router.post(routeBase + '/contact', (req, res) => {
   console.log(req.body);
   s ="INSERT INTO `ebtekarthon`.`contact_inf` (`name`, `position`, `email`, `bio`) VALUES ( '"
    + req.body.name +" ', '" + req.body.position +  "', '"
     + req.body.mobile  +"' , '" + req.body.email + " ' ) ;" ;
                   
   db.query(s, function (err, result) {
      if (err) throw err;
      let n = { id :result.insertId ,
         name : req.body.name ,
          position : req.body.position 
          , mobile : req.body.mobile ,
           email : req.body.email  };
      console.log(result);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*")
  
 res.send(n);
 });
});
module.exports = router;