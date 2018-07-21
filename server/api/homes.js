const router = require("express").Router();
const { User, Home } = require("../db/models");
module.exports = router;

router.put("/edit/:homeId", async (req, res, next) => {
  try {
    const homeId = req.params.homeId;
  } catch (error) {
    next(error);
  }
});
