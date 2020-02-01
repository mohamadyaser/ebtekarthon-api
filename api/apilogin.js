
const express = require('express'),
  bodyParser = require('body-parser'),
 bcrypt = require('bcryptjs'),
jwt = require('jsonwebtoken'),
 mandrill = require('node-mandrill'),
  router = express.Router();

const {
  createDatabaseConnection,
  DB_NAME
} = require('../database/config');

router.use(bodyParser.json());
router.use(express.json());

router.get('/users', (req, res) => {
  res.json(users);
})

//  الي يعمل بوست يعني 
router.post('/users', async (req, res, err) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    console.log(hash);

    createDatabaseConnection((error, connection) => {
      if (error) {
        req.status(500);
        return;
      }
      connection.query(`INSERT INTO ${DB_NAME}.user (user_name,email,user_pass) VALUES ('${req.body.username}','${req.body.email}','${hash}');`, function (err, result) {
        if (err) throw err;
        console.log(result);
        connection.end();
        res.status(201).send(result);
      });
    });

  } catch {
    res.status(500).send();
  }
});



router.post('/users/login', (req, res, err) => {
  try {
    // const users = [];
    createDatabaseConnection((error, connection) => {
      if (error) {
        req.status(500);
        return;
      };
      connection.query(`SELECT * FROM user ;`, async (error, results, fields) => {
        const user = results.find(user => user.email === req.body.email);
        console.log(user);
        if (user == null) {
          res.status(400).send('400')
        }
        const x = await bcrypt.compareSync(req.body.password, user.user_pass);
        console.log(x);
        if (x) {
          const token = await jwt.sign({
            email: req.body.email
          }, 'secretkey');
          console.log(token);
          res.send({
            token
          });
        } else {
          res.status(400).send('400')
        }
      });
    });
  } catch (err) {
    console.log(err);
    res.status(400).send('400')
  }


});
// function sendmasg(){
// //send an e-mail to jim rubenstein
// mandrill('/messages/send', {
//   message: {
//       to: [{email: 'ammoura575@gmail.com', name: 'ahmad'}],
//       from_email: 'aliayousef33@gmail.com',
//       subject: "Hey, what's up?",
//       text: "Hello, I sent this message using mandrill."
//   }
// }, function(error, response)
// {
//   //uh oh, there was an error
//   if (error) console.log( JSON.stringify(error) );

//   //everything's good, lets see what mandrill said
//   else console.log(response);
// });
//  // define your own email api which points to your server.
// }
// router.post( '/api/sendemail/', function(req, res){

//   // var _name = req.body.name;
//   // var _email = req.body.email;
//   // var _subject = req.body.subject;
//   // var _messsage = req.body.message;

//   //implement your spam protection or checks. 

//  sendmasg(); 
// res.sendStatus(200);
// });
module.exports = router;