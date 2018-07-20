const router = require('express').Router
const { User, Home } = require('../db/models')
module.exports = router

router.post('/add', async (req, res, next) => {
  try {

    const user = await User.findOne({
      email: req.body.email
    })

    const home = await Home.findOCreate({where: {
      postCode: req.body.postCode}
    })

    await home[0].addUser(user)

    res.json(home)

  } catch(error) { next(error) }
})
