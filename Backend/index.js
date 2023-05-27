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
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json({ type: "application/json" }));

app.use(cookieParser());

app.get("/test", testRoute.login);
app.post("/register", Authentication.register);
app.post("/login", Authentication.login);
app.post(
  "/create/review/:location_id/:user_id",
  require("./endpoints/endpoint_createReview")
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
