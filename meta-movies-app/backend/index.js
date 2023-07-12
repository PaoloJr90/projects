import express from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all movies from the database
app.get("/", (req, res) => {
  db.select("*")
    .from("movies")
    .then((data) => {
      //   console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET: Fetch movie by movieId from the database
app.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  db.select("*")
    .from("movies")
    .where("movie_id", "=", movieId)
    .then((data) => {
      // console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST: Create movies and add them to the database
app.post("/add-movie", (req, res) => {
  const {
    movieName,
    imgUrl,
    releaseYear,
    summary,
    director,
    genre,
    rating,
    movieRuntime,
    metaScore,
  } = req.body;
  db("movies")
    .insert({
      movie_name: movieName,
      img_url: imgUrl,
      release_year: releaseYear,
      summary: summary,
      director: director,
      genre: genre,
      rating: rating,
      movie_runtime: movieRuntime,
      meta_score: metaScore,
    })
    .then(() => {
      console.log("Movie Added");
      // return res.json({ msg: "Movie Added" });
      return res.redirect("http://localhost:3000");
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE: Delete movie by movieId from the database
app.delete("/delete-movie", (req, res) => {
  const movieId = req.body;
  const movieIdToDelete = Number(movieId.movieId);
  // console.log(`Movied ID: ${movieIdToDelete} deleted`);
  db("movies")
    .where("movie_id", "=", movieIdToDelete)
    .del()
    .then(() => {
      console.log(`Movied ID ${movieIdToDelete} deleted`);
      return res.json({ msg: "Movie Deleted" });
    })
    .catch((err) => {
      console.log(err);
    });
});

// PUT: Update movie by movieId from the database
app.put("/update-movie", (req, res) => {
  db("movies")
    .where("movie_id", "=", 11)
    .update({ movie_name: "Star Wars: Episode VIII - The Last Jedi" })
    .then(() => {
      console.log("Movie Updated");
      return res.json({ msg: "Movie Updated" });
    })
    .catch((err) => {
      console.log(err);
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
