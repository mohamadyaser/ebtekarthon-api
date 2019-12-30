const
    express = require("express"),
    router = express.Router(),
    routeBase = '/contact'
;



router.get(routeBase + '/contact', (req, res) => {
    res.send('success get');
});

router.get(routeBase + '/contactp', (req, res) => {
    res.send('success get');
});
router.post(routeBase + '/contact', (req, res) => {
    res.send('success get');
});

module.exports = router;