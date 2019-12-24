const
    express = require("express"),
    router = express.Router(),
    routeBase = '/header'
;

router.post(routeBase + '/logo', (req, res) => {
    saveImageToDisk(req.image, folder, (error, relativePath) => {

    })
    res.send('success');
});

router.get(routeBase + '/logo', (req, res) => {
    res.send('success get');
});

module.exports = router;