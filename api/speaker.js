const
    express = require("express"),
    router = express.Router(),
    routeBase = '/speaker'
;
router.get(routeBase + '/speaker', (req, res) => {
    res.send('success get');
});

module.exports = router;