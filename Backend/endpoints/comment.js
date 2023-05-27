const mysql = require("mysql2");
const util = require("util");

const getByReview = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  const reviewId = req.params.Id;
  var sql = mysql.format("select * from comments where review_id = ?", [
    reviewId,
  ]);
  try {
    const comments = await query(sql);
    res.status(200).send({
      comments: comments,
    });
  } catch (error) {
    console.log("Query Error");
    res.status(500).send({
      status: "Error",
      error: error,
    });
  }
};

const create = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  const comment = req.body.comment;
  const userId = req.userId;
  const reviewId = req.params.Id;

  var sql = mysql.format(
    "insert into comments (comment, user_id, review_id) values (?,?,?)",
    [comment, userId, reviewId]
  );

  try {
    await query(sql);
    res.status(201).send({
      status: "Add comment successfully",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      error: error,
    });
  }
};

module.exports = {
  getByReview,
  create,
};
