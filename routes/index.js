var firebase = require("firebase-admin");

var serviceAccount = require("../savemoney-bbd2c-firebase-adminsdk-svr4d-1d81044ddb.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://savemoney-bbd2c.firebaseio.com"
});
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/database', function(req, res, next) {
	var msg = {text:'hihihihihi',timestamp: new Date().toString()};
	var ref  = firebase.database().ref().child('node-client');
	var logsRef = ref.child('logs');
	var msgref = ref.child('msg');
	var messagesRef = msgref.push(msg);
	logsRef.child(messagesRef.key).set(msg);
	console.log("database")
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
