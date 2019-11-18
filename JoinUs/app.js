var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


// Connecting Express to MySQL
var connection = mysql.createConnection({
	host		: 'localhost',
	user		: 'root',
	database	: 'join_us'
});


// The "root route"
// If we go on this webpage, you'll get the res.send("...") message.
app.get("/", function(req, res){
	// Find count of users in DB
	var q = "SELECT COUNT(*) AS count FROM users";
	connection.query(q, function(err, results){
		if (err) throw err;
		var count = results[0].count;
		// res.send("We have " + count + " users in our db");
		res.render('home', {data: count});
	});
});


// post route
app.post('/register', function(req, res){
	var person = {
		email: req.body.email
	};
	
	connection.query('INSERT INTO users SET ?', person, function(err, result) {
		if (err) throw err;
		res.redirect('/');
	});
});


// joke route
// If a user visits ".../joke", they get this message
app.get("/joke", function(req, res){
	var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
	res.send(joke);
});


// Add a "/random_num" route:
app.get("/random_num", function(req, res){
	var num = Math.floor(Math.random() * 10) + 1;
	res.send("Your lucky number is " + num);
});


// We start our server port 3000
app.listen(3000, function(){
	console.log("Server running on 3000!");
});

