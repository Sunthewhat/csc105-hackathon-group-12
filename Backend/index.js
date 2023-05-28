const express = require("express");
const mysql = require("mysql2");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 4000;
const dotenv = require("dotenv");
const cors = require("cors");

const testRoute = require("./endpoints/endpoint_test");
const Authentication = require("./endpoints/authentication");
const reviews = require("./endpoints/reviews");
const location = require("./endpoints/locations");
const comment = require("./endpoints/comment");
const auth_middleware = require("./middleWares/auth_middleware");

const connection = mysql.createConnection({
  host: "db.cshack.site",
  port: "3306",
  user: "group12",
  password: "208218262",
  database: "group12",
});

dotenv.config();

connection.connect(() => {
  console.log("Database is connected");
});

global.connection = connection;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(bodyParser.json({ type: "application/json" }));

app.use(cookieParser());
//Authentications
app.get("/test", testRoute.login);
app.post("/register", Authentication.register);
app.post("/login", Authentication.login);
app.post("/logout", Authentication.logout);
app.get("/getuser/:id", Authentication.getUserById);
app.get("/getprofile", auth_middleware, Authentication.getProfile);
//Reviews
app.get("/review/:location_id", reviews.read);
app.post("/review/:location_id", auth_middleware, reviews.create);
app.patch("/review/:review_id", reviews.update);
app.delete("/review/:review_id", reviews.remove);
//locations
app.get("/location", location.getAll);
app.get("/location/activity/:id", location.getActivity);
app.get("/location/popular", location.getPopular);
app.get("/location/:id", auth_middleware, location.get);
app.get("/location/side/:side", location.getBySide);
//Comments
app.get("/comment/:Id", comment.getByReview);
app.post("/comment/:Id", auth_middleware, comment.create);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
