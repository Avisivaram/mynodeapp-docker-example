var mysql = require('mysql');
require("dotenv").config();

var con = mysql.createConnection({
  host: "mysqldb",
  port: 3306,
  user: "root",
  password: "root",
  database: "myapp"
  // insecureAuth:true
});
console.log(process.env);
con.connect(function(err) {
    console.log("Hi "+process.env.toString());
  if (err) throw err;
  console.log("Connected!");
});