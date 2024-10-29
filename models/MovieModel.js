const mongoose = require(`mongoose`);

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  producer: {
    type: String,
    unique: true,
    required: true,
  },
  genre: {
    type: String,
    unique: true,
    required: true,
  },
});

const movieModel = new mongoose.model("movie", movieSchema);

module.exports = movieModel;
