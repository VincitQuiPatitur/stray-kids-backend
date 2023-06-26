const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    id: Number,
    name: String,
    photoCard: String,
    personalPhoto: String,
    birthName: String,
    stageName: String,
    birthDate: Date,
    zodiac: String,
    height: Number,
    groupPosition: [String],
    skzoo: String
});

module.exports = mongoose.model('member', memberSchema);