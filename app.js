import express from "express";
import {getMovies, getMovieById} from "./movieHandlers.js";
import {getUsers, getUsersById} from "./userHandlers.js"

const app = express();
const port = process.env.APP_PORT ?? 5000;

app.use(express.json());

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

app.get("/api/movies", getMovies);
app.get("/api/movies/:id", getMovieById);

app.get("/api/users", getUsers);
app.get("/api/users/:id", getUsersById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});