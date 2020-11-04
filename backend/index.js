
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db_ip",
  user: "dbuser",
  password: "password",
  database: "dbname"
});



const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

con.connect(function(err) {
  if (err) throw err;
  
});
app.get('/api/refunds', (req, res) => {
  con.query("select * from fmkdb.AccessToken", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
