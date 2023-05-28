const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token;
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const { userId } = data;
    const { username } = data;
    req.userId = userId;
    req.username = username;
    next();
  } catch (error) {
    return res.status(401).send();
  }
};
