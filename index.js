var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log("aaa")
})
app.get('/peter', function (req, res) {
    console.log("bbbb")
})
app.listen(3000,function(){
    console.log("running on port 3000...")
})
