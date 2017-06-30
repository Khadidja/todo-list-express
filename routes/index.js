var express = require('express');
var router = express.Router();

var items = ['Make coffee', 'Turn on computer', 'Relax on couch', 'Start coding', 'Sip all of the coffee'];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'TO-DO List', items: items });
});

module.exports = router;