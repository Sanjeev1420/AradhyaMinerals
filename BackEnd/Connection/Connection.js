const mysql = require("mysql");
require("dotenv").config();

const con = mysql.createConnection({
  host: `${process.env.h.split("").reverse().join("").split("%%").join("")}`,
  user: process.env.u.split("sorry").join(""),
  password: process.env.p.split("$$$").join("")+"!123",
  database: process.env.ll,
});


try {
  con.connect((err, result) => {
    if (err) console.log("Some Error  " + err);
    else console.log("Connected to database");
  });
} catch (err) {
  console.log(err);
}
module.exports = con;
