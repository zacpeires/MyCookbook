const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const db = require('./db');

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./api'))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


const port = process.env.PORT || 3000;

db.sync({force: true})
  .then(function(){
    app.listen(port, function () {
      console.log(`Your server, listening on port ${port}`);
    })
  })
