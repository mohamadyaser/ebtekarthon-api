const
    express = require("express"),
    router = express.Router(),
    routeBase = '/contact'
;



router.get(routeBase + '/get', (req, res) => {
      console.log(req.body);
    res.send('success get');
});

// router.get(routeBase + '/contactp', (req, res) => {
//     res.send('success get');
// });
router.post(routeBase + '/post', (req, res) => {
   console.log(req.body);
    res.send('success get');
});

module.exports = router;