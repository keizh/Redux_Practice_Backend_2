const MovieRoutes = require(`express`).Router();
const movieModel = require("../models/MovieModel");

MovieRoutes.get("/Movies", async (req, res) => {
  try {
    const movies = await movieModel.find();
    if (movies && movies.length > 0) {
      res.status(200).json({ message: "Movies Fetched", data: movies });
    } else {
      res.status(404).json({ message: "Failed to fetch Data" });
    }
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
});

MovieRoutes.post("/Movies", async (req, res) => {
  console.log(`hit`);
  const { name, producer, genre } = req.body;
  const movie = new movieModel({ name, producer, genre });
  try {
    const movieSaved = await movie.save();
    if (movieSaved) {
      res.status(200).json({ message: "Movie Added", data: movieSaved });
    } else {
      res.status(404).json({ message: "Failed to add data", data: movieSaved });
    }
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
});

MovieRoutes.delete("/Movies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await movieModel.findByIdAndDelete(id);
    if (deleted) {
      res.status(200).json({ message: "Movie Deleted", data: deleted });
    } else {
      res
        .status(404)
        .json({ message: "Failed to Delete Movie", data: deleted });
    }
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
});

module.exports = MovieRoutes;
