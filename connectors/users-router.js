const router = require("express").Router();

const Users = require("../models/users-model.js");
const restricted = require("../middleware/restricted.js");

router.get("/", restricted, async (req, res) => {
  const { department } = req.decodedJwt;

  try {
    const users = await Users.findByDept(department);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Users could not be found." });
  }
});

module.exports = router;
