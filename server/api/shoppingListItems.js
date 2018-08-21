const router = require('express').Router();
const { ShoppingListItem, User } = require('../db/models')
module.exports = router


router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findOne({
      where: {
        id: userId
      }
    })

    const items = await user.getShoppingListItem();

    res.json(items)


  } catch(error) { next(error) }
})

router.post('/add/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findOne({
      where: {
        id: userId
      }
    })


    const item = await ShoppingListItem.create(req.body)
    await user.addShoppingListItem(item)

    res.json(item)


  } catch(error) { next(error) }
})
