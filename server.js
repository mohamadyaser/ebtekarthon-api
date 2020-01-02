const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    header = require('./api/header'),
    schedule = require('./api/day'),
    contact =require('./api/contact'),    
    speaker = require('./api/speaker'),
    partners = require('./api/partners'),
    db = require('./database/db'),
    port = 3000 ;

app.use(bodyParser.json());
app.use(header);
app.use(schedule);
app.use(contact);
app.use(speaker);
app.use(partners);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

