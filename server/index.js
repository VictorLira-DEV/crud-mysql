const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { createPool } = require("mysql");

const db = createPool({
  host: "localhost",
  user: "root",
  password: "victor",
  database: "crud-movies",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api/get", (req, res) => {
  const sqlSelect =
    "SELECT * FROM `crud-movies`.`movie-reviews`";
  db.query(sqlSelect, (err, results) => {
    res.send(results)
  });
});

//req to get information from the front-end
app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert =
    "INSERT INTO `crud-movies`.`movie-reviews` (`movieName`, `movieReview`) VALUES (?,?)";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
