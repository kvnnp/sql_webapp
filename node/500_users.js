// Tell our file you want to use a package you've installed
var faker = require('faker');
var mysql = require('mysql');

// Establish a connection between NodeJS and MySQL
var connection = mysql.createConnection({
	host		:	'localhost',
	user		: 	'root',
	database	:	'join_us'
	
});

//INSERTING LOTS OF DATA
var data = [];

for(var i = 0; i < 500; i++){
	data.push([
		faker.internet.email(),
		faker.date.past()
	]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?'

connection.query(q, [data], function(err, result){
	console.log(err);
	console.log(result);
});

connection.end();


