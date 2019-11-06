var MongoClient = require('mongodb').MongoClient,
  settings = require('./settings');
MongoClient.connect("mongodb://localhost/" + settings.db, function (err, db) {
  if (err) {
    return console.dir(err);
  }
  console.log("connected to db");
  db.collection("users", function (err, collection) {
    var docs = [
      { name: "katayama", score: 100 },
      { name: "poness", score: 90 },
      { name: "ditto", score: 95 }
    ];
    collection.insert(docs, function (err, result) {
      console.dir(result);
    });
  });
});
