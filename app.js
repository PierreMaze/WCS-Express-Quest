import express from "express";
import {getMovies, getMovieById, postMovie, updateMovie} from "./movieHandlers.js";
import {getUsers, getUsersById, postUser, updateUser} from "./userHandlers.js"

const app = express();
const port = process.env.APP_PORT ?? 5000;

app.use(express.json());

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

app.get("/api/movies", getMovies);
app.get("/api/movies/:id", getMovieById);

app.post("/api/movies", postMovie);

app.put("api/movies/:id", updateMovie);

app.get("/api/users", getUsers);
app.get("/api/users/:id", getUsersById);

app.post("/api/users", postUser);

app.put("api/users/:id", updateUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});