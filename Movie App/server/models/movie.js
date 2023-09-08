const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: String,
    genre: String,
    year: Number,
    star_actors: String,
    directorId: String
});

module.exports = mongoose.model('Movie', movieSchema);
