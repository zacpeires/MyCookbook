const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const passport = require('passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./db');
const dbStore = new SequelizeStore({ db: db });
const app = express()

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>
  db.models.user.findById(id)
    .then(user => done(null, user))
    .catch(done))

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: process.env.SESSION_SECRET || 'myCookbook secret',
  store: dbStore,
  resave: false,
  saveUninitialized: true
}));


dbStore.sync();

app.use(passport.initialize());
app.use(passport.session());

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

db.sync()
  .then(function(){
    app.listen(port, function () {
      console.log(`Your server, listening on port ${port}`);
    })
  })
