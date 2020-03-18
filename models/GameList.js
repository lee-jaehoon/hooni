const mongoose = require('mongoose');


const gameListSchema = mongoose.Schema({

    name: String,
    playerDescription: String,
    difficultDescription: String,
    playTimeDescription: String,
    genreDescription: String,
    descriptionTime: String,
    detailDescription: String,
    Url: String,

    date: { type: Date, default: Date.now },
    
    player: [Number],
    difficult: Number,
    playTime: Number,
    genre: [String]  
})

const BoardGameList = mongoose.model('BoardGameList', gameListSchema)

module.exports = { BoardGameList }