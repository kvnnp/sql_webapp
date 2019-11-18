// NPM = Node Package Manager 

// faker is a package that streamlines that process of generating fake data
// To install: npm install faker

// Tell our file you want to use a package you've installed
var faker = require('faker');
var mysql = require('mysql');

// Generating a fake email
// console.log(faker.internet.email());

// Generating a fake date
// console.log(faker.date.past());

// function generateAddress() {
// 	console.log(faker.address.streetAddress());
// 	console.log(faker.address.city());
// 	console.log(faker.address.state());
// }
// generateAddress();

// 1. Establish a connection between NodeJS and MySQL
var connection = mysql.createConnection({
	host		:	'localhost',
	user		: 	'root',
	database	:	'join_us'
	
});


//SELECTING DATA
// var q = 'SELECT COUNT(*) AS total FROM users'
// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results[0].total)
// });
// connection.end();

//INSERTING DATA
// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';

// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results)
// });
// connection.end();


//INSERTING DATA TAKE 2
// var person = {email: faker.internet.email(),
// 			  created_at: faker.date.past()
// };

// connection.query('INSERT INTO users SET ?', person, function(error, result) { 
// 	if (error) throw error;
// 	console.log(result);
// });

// connection.end();


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












