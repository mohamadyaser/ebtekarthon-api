const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    header = require('./api/header'),
    day = require('./api/day'),
    contact =require('./api/contact'),    
    speaker = require('./api/speaker'),
    partners = require('./api/partners'),
    db = require('./dataBase/config'),
    cors = require('cors'),
    port = 3000 ;

app.use(bodyParser.json());
app.use(header);
app.use(day);
app.use(contact);
app.use(speaker);
app.use(partners);
app.use(cors()); 
// app.use(db);
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

