const router = require("express").Router();
const { User, Home } = require("../db/models");
module.exports = router;


router.get('/me', (req, res, next) => {
  res.json(req.user);
});


router.post('/signup', async (req, res, next) => {
  try {

    const newUser = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    });

    if (req.body.postCode) {
      var home = await Home.findOne({
        where: {
          postCode: req.body.postCode
        }
      });


      if (!home) {
       home = await Home.create({postCode: req.body.postCode, numerOfPeople: 1})
      }
      await home.addUser(newUser);
    } else if (home) {
      await home.update()
    }

    res.json(newUser);
  } catch (error) {
    next(error);
  }
});


router.put('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    },
    include: [{model: Home}]
  })
    .then(user => {
      if (!user) {
        res.status(401).send('User not found')
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password');
     } else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});


router.delete('/logout', (req, res, next) => {

  req.logout();
  req.session.destroy()
  res.sendStatus(204);
});


router.delete("/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    await user.destroy().end();
  } catch (error) {
    next(error);
  }
});

