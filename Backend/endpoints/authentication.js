const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const util = require("util");

function validPassword(password) {
  return (
    password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password)
  );
}

const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var sql = mysql.format("select * from users where username = ?", [username]);
  console.log("Debug: /login => " + sql);

  connection.query(sql, async (err, rows) => {
    if (err) {
      return res.status(401).send({
        success: false,
        data: null,
        error: err.message,
      });
    }
    if (rows.length == 0) {
      res.status(401).send({
        success: false,
        error: "Username not found",
      });
    } else {
      const validPass = await bcrypt.compare(password, rows[0].password);
      if (!validPass) {
        res.status(401).send({
          success: true,
          message: "Password Incorrect",
        });
      } else {
        const login_token = jwt.sign(
          {
            userId: rows[0].id,
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "7d" }
        );
        res.cookie("jwt_token", login_token);
        res.status(201).send({
          success: true,
          message: "Authentication Success",
        });
      }
    }
  });
};

const register = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const query = util.promisify(connection.query).bind(connection);

  try {
    var sql = mysql.format("select * from users where username = ?", [
      username,
    ]);
    //   console.log(sql);
    const users = await query(sql);
    // console.log(users);
    if (users.length != 0) {
      return res.status(400).json({
        success: false,
        error: "Username already existed",
      });
    }

    if (!validPassword(password)) {
      return res.status(400).json({
        success: false,
        message: "Password does not match requirements",
      });
    }

    const hashed_password = await bcrypt.hash(password, 10);

    sql = mysql.format(
      "INSERT INTO users (username,email,password) VALUES (?,?,?)",
      [username, email, hashed_password]
    );

    console.log("/register => " + sql);
    await query(sql);
    res.status(201).send({
      success: true,
      message: "Registered",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      //   error: "Username already existed",
    });
  }
};

const getProfile = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  try {
    const users = await query("select id, username from users where id = ?", [
      req.userId,
    ]);
    // console.log(users);
    res.send(users);
  } catch (error) {
    return res.status(500).json({
      success: false,
      // error: "Username already existed",
    });
  }
};

const logout = async (req, res) => {
  res.clearCookie("jwt_token");
  res.send();
}

module.exports = {
  login,
  logout,
  register,
  getProfile,
};
