const
    express = require("express"),
    router = express.Router(),
    routeBase = '/schedule';
////////////////////////////////////////

router.get(routeBase + '/day', (req, res) => {
    res.send('success get');
});
/////////////////////////////////////////
router.post(routeBase + '/day', (req, res) => {
    res.send('success');
});



module.exports = router;
