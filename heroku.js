var gzippo = require('gzippo');
var express = require('express');
var app = express();

//app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000, function () {
  console.log('Node app is running on port %s', process.env.PORT || 5000);
});
