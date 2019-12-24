const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    header = require('./api/header'),
    port = 3000
;

app.use(bodyParser.json());
app.use(header);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});