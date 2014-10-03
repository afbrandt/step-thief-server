var express = require('express'),
  mongoskin = require('mongoskin'),
  bodyParser = require('body-parser')

var app = express()

app.use(bodyParser())

var db = mongoskin.db('mongodb://xerxes-dev:dorystudios@ds043170.mongolab.com:43170/stepthief-dev')

app.get('/v1/', function(req, res) {
  res.send('service is up, try /v1/users/')
})

app.listen(3000)
