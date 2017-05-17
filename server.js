var express = require('express');
var app = express();

var fs = require('fs');
var path = require('path');
var moment = require('moment');

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.get('/:dateString', function(req, res) {
  var myDate;
  if(/^\d{8,}$/.test(req.params.dateString)) {
    myDate = moment(req.params.dateString, "X");
  } else {
    myDate = moment(req.params.dateString, "MMMM D, YYYY");
  }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
});


app.listen(port, function() {
    console.log('Server started...');
});