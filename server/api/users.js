const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
   const users = await User.findAll()
   res.json(users)

    } catch (error) { next(error) }
  });


  router.post('/', async (req, res, next) => {
    try {
     const newUser = await req.body
     res.json(newUser)

      } catch (error) { next(error) }
    });



router.delete('/:userId', async (req, res, next) => {
   try {
    const user = req.params.userId
    await user.destroy().end()

   } catch (error) {next(error)}

});
