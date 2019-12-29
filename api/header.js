const
    express = require("express"),
    router = express.Router(),
    routeBase = '/header'
;



router.get(routeBase + '/logo', (req, res) => {
    res.send('success get');
});

module.exports = router;