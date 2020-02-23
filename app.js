const express = require("express");

const bodyParser = require("body-parser");

const ejs = require("ejs");

const path = require("path");

const  mysql = require("mysql");

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//var connection = mysql.createConnection({
//	host:"localhost",
//	user:"root",
//	password:" root ",
//	database:"nodejs_tasks "
//});
//connection.connect(function(err){
//	if(err)throw err;
//	console.log("Node connected to mysql server")
//});

app.get("/",function(req,res){
	res.render("home");
});

app.get("/bus",function(req,res){
	res.render("bus");
	//connection.query("SELECT * FROM table_tasks",function(error,rows,fields){
	  //   if(!!error){
		//	 console.log("Error in the query")
		 //}else{
			// console.log("success with query")
		// }
	//});
});







app.listen(3000, function() {
  console.log("Server started on port 3000");         
});

