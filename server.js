var path = require('path')
var express = require('express')
var app = express();
app.use('/static', express.static(path.join(__dirname,'build/static')));
app.get('*',function(req,res,next){
  res.sendFile(path.join(__dirname,'./build/index.html'))
})
app.listen('3000')