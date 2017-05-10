var mysql = require('mysql');
var pool  = null;

exports.connect = function() {
  pool = mysql.createPool({
  //	connectionLimit : 100, //important for concurence connections
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cmpe189'
  });
}

exports.get = function() {
  return pool;
}
