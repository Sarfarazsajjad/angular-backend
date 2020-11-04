
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "safigm420",
  database: "fmkdb"
});



const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000


  var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
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