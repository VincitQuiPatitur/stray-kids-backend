const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    id: Number,
    albumName: String,
    releaseDate: Date,
    albumCover: String,
    type: String,
    title: String,
    description: [String],
    trackList: [String],
    youtubeLink: String,
    category: [String]
});

module.exports = mongoose.model('album', albumSchema);