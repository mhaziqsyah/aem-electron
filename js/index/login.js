var db = new PouchDB('users');
db.info().then(function (info) {
  document.getElementById('display').innerHTML = 'We have a database: ' + JSON.stringify(info);
});