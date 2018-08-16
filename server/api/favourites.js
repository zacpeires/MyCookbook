const router = require('express').Router();
const { Home, User, Recipe } = require("../db/models")
module.exports = router


router.get('/user-recipes/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findOne({
      where: {
        id: userId
      },
    include: [
      {model: Recipe,
      through: 'user-recipes'}
    ]
    })

    res.json(user)


  } catch(error) {next(error)}

})
