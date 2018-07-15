const router = require('express').Router()
module.exports = router


router.use('/users', require('./users'));
// router.use('/api/cuisines', require('./cuisine'))
router.use('/recipes', require('./recipes/recipe'))
router.use('/home', require('./home'))


router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

