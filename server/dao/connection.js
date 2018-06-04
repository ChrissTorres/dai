var mysql = require( 'mysql' );

var con = mysql.createConnection( {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "dai5501_db"
} );


module.exports = con;