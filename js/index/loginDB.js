
var PouchDB = require('PouchDB');
var db = new PouchDB('http://localhost:5984/users');
console.log ("Database created Successfully.");

//Database information
db.info(function(err, info) {
  if (err) {
     return console.log(err);
  } else {
     console.log(info);
  }
});