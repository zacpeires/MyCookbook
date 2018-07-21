const router = require("express").Router();
const { User, Home } = require("../db/models");
module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    const newUser = User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    });

    if (req.body.postCode) {
      const home = await Home.findOCreate({
        where: {
          postCode: req.body.postCode
        }
      });

      await home[0].addUser(newUser);
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
