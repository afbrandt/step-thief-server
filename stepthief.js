var express = require('express'),
  mongoskin = require('mongoskin'),
  bodyParser = require('body-parser')

var app = express()

app.use(bodyParser())

var db = mongoskin.db('mongodb://xerxes-dev:dorystudios@ds043170.mongolab.com:43170/stepthief-dev')

app.get('/v1/', function(req, res) {
  console.log('received a GET to /v1/')
  res.send('service is up, try /v1/users/')
})

app.post('/v1/register', function(req, res) {
  console.log('received POST to /v1/register')
  db.collection('v1-users').insert(req.body, {}, function(e, results){
    if (e) return next(e)
    res.send(results)
  })
})

app.listen(3000)
