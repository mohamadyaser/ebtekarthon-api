const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    day = require('./api/day'),
    contact =require('./api/contact'),    
    speaker = require('./api/speaker'),
    event = require('./api/event'),
    socialMedia = require('./api/socialMedia'),
    juries = require('./api/juries'),
    partners = require('./api/partners'),
    cors = require('cors'),
    port = 3000;
    
app.use(bodyParser.json());
app.use(cors()); 
app.use(day);
app.use(event);
app.use(contact);
app.use(speaker);
app.use(socialMedia);
app.use(juries);
app.use(partners);
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

