const express = require("express");
const app = express();
const port = 8080;
const Mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
// // 1 _a
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("blogTest");
//     dbo.collection("Authors").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });
// // 1 _b
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("blogTest");
//     dbo.collection("posts").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });
// // 2
function getCollection(dbName, collectionName) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db(`${dbName}`);
        dbo.collection(`${collectionName}`).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}
console.log(getCollection("blogTest", "posts"));

app.listen(port, (req, res) => {
    console.log(`listening to: ${port}`);
})