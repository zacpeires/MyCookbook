const router = require("express").Router();
const { User, Home } = require("../db/models");
module.exports = router;

router.post("/", async (req, res, next) => {
  try {


    const newUser = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    });

    if (req.body.postCode) {
      let home = await Home.findOne({
        where: {
          postCode: req.body.postCode
        }
      });
      if (!home) {
       home = await Home.create({postCode: req.body.postCode})
      }
      await home.addUser(newUser);
    }

    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    await user.destroy().end();
  } catch (error) {
    next(error);
  }
});
