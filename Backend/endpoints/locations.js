const mysql = require("mysql2");
const util = require("util");

const getAll = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  var sql = mysql.format("select * from locations");
  try {
    const data = await query(sql);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getPopular = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  var sql = mysql.format(
    "select * from locations order by views desc limit 10"
  );
  try {
    const data = await query(sql);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getActivity = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  const id = req.params.id;
  var sql = mysql.format(
    "select bananaboat, jetski, paramotor, diving, sailing from locations where id = ?",
    [id]
  );
  try {
    const data = await query(sql);
    res.status(200).send(data[0]);
  } catch (error) {
    res.status(500).send({ error });
  }
};

const get = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  const id = req.params.id;

  try {
    var sql = mysql.format(
      "update locations set views = views+1 where id = ?",
      [id]
    );
    await query(sql);
    sql = mysql.format("select * from locations where id = ?", [id]);
    const data = await query(sql);
    res.status(200).send(data[0]);
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports = {
  getAll,
  get,
  getPopular,
  getActivity,
};
