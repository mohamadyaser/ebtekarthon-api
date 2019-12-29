const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    header = require('./api/header'),
    schedule = require('./api/schedule'),
    port = 3000
;

app.use(bodyParser.json());
app.use(header);
app.use(schedule);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});