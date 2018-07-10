const router = require('express').Router()
module.exports = router


router.use('/api/users', require('./users'));


router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});



