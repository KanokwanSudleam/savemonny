var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res){
	var description = req.body.description
	var channel=req.body.channel
	console.log('description',description)
	console.log(channel)
	 res.render('index', { title: 'Express' })
})

module.exports = router;
