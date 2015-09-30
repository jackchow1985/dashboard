var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getDataFromFile', function(req, res, next) {
	var dataFiles = req.query["file"].split("|");
	var obj = {}
	for(var i = 0; i < dataFiles.length; i ++) {
		obj[dataFiles[i]] = JSON.parse(fs.readFileSync('data/' + dataFiles[i] + '.js'));
  	}
	res.json(obj);
	
});

module.exports = router;
