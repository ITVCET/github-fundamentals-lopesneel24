
  
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
//database name
  var dbo = db.db("neels_database");
 
 
 var myobj = { name: "neel", rollno: "24" , class: "TE_IT" , stream :"INFT"};
 var myobj = { name: "shreyash", rollno: "22" , class: "TE_IT" , stream :"INFT"};
  dbo.collection("students").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});