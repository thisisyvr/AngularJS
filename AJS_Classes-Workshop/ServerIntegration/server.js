//import modules
//require() is the predefined function used to import modules
var express = require("express");
var mysql   = require("mysql");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");


//create the node server instance.
var app = express();

//Deploy the Client Application.
//app.use(express.static("D:/AJS_Classes/ServerIntegration"));
app.use(express.static(__dirname+"/../ServerIntegration"));

//set the MIME Type.
app.use(bodyparser.json());


//connection object (mysql)
var connection = mysql.createConnection({
    host:"localhost",
    user : "root",
    password:"root",
    database : "demo"
});

//connect to database.
connection.connect();

//create the Rest API
app.get("/mysql",function (req,res) {
    connection.query("select * from products",
            function (err,recordsArray,fields) {
        res.send(recordsArray);
    });
});


//create the REST API
var workshop = mongodb.MongoClient;
app.get("/mongodb",function (req,res) {
    workshop.connect("mongodb://127.0.0.1/demo",
            function (err,db) {
        db.collection("products").find()
            .toArray(function (err,array) {
            res.send(array);
        });
    });
});


//assign port no.
app.listen(8080);
console.log("Server Lisrening the Port No.8080");

