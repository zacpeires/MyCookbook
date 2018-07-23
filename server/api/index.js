const router = require('express').Router()
module.exports = router


router.use('/users', require('./users'));
router.use('/api/cuisines', require('./cuisines'))
router.use('/recipes', require('./recipes/recipes'))
router.use('/home', require('./homes'))


router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

