const
    express = require("express"),
    router = express.Router(),
    routeBase = '/partners'
;

router.get(routeBase + '/partners', (req, res) => {
    res.send('success get');
});

module.exports = router;