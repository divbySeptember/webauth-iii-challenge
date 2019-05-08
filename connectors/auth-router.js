const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = require("../api/secrets").jwtSecret;
const Users = require("../models/users-model.js");

router.post("/register", async (req, res) => {
  try {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 4);
    user.password = hash;

    const addedUser = await Users.add(user);

    res.status(201).json(addedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Hello, ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
