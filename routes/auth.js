var express = require('express');
var router = express.Router();

/* GET post page. */
router.post('/sign-up', function(req, res, next) {
  res.send(JSON.stringify(req.body));
});

module.exports = router;
