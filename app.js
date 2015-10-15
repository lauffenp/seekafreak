//app.js
var express = require('express');
var path = require('path');

var routes = require('./routes');

var app = express();
app.use(routes);

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');


app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"),function() {  console.log("Server Up on port" +  app.get("port")); 
});