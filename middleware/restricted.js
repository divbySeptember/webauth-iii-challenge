const jwt = require("jsonwebtoken");

const secret = require("../api/secrets").jwtSecret;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: "You shall not pass!" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "You have not provided a token." });
  }
};
