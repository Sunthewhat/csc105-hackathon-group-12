const mysql = require("mysql2");
const util = require("util");

const create = async (req, res) => {
  const location_id = req.params.location_id;
  const user_id = req.userId;
  const header = req.body.header;
  const text = req.body.text;

  const query = util.promisify(connection.query).bind(connection);
  var sql = mysql.format(
    "insert into reviews (header, text, user_id, location_id) values (?,?,?,?)",
    [header, text, user_id, location_id]
  );
  console.log("DEBUG => Create Reviews =>" + sql);
  try {
    await query(sql);
    res.status(201).send({
      status: "Create new review successfully",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      error: error,
    });
  }
};
const read = async (req, res) => {
  const location_id = req.params.location_id;
  const query = util.promisify(connection.query).bind(connection);
  var sql = mysql.format("select * from reviews where location_id = ?", [
    location_id,
  ]);
  // console.log(sql);
  try {
    //   console.log(location_id);
    const data = await query(sql);
    res.status(200).send({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      error: error,
    });
  }
};

const update = async (req, res) => {
  const review_id = req.params.review_id;
  const header = req.body.header;
  const text = req.body.text;

  const query = util.promisify(connection.query).bind(connection);
  var sql = mysql.format(
    "update reviews set header = ?, text = ? where id = ?",
    [header, text, review_id]
  );
  console.log("DEBUG => Update reviews => " + sql);
  try {
    await query(sql);
    res.status(201).send({
      status: "Update success",
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      error: error,
    });
  }
};

const remove = async (req, res) => {
    const query = util.promisify(connection.query).bind(connection);
    const review_id = req.params.review_id;

    var sql = mysql.format("delete from reviews where id = ?", [review_id]);
    try {
        await query(sql);
        res.status(200).send({
            status: "Delete successfully",
        });
    } catch (error) {
        res.status(500).send({
            status: "error",
            error: error,
        })
    }
};

module.exports = {
  create,
  read,
  update,
  remove,
};
