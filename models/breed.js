const mongoose = require("mongoose")

const breedSchema = mongoose.Schema({
    name: String,
    friendliness: Number,
    aggression: Number,
    images: {
        type:[String]
    }
})

const Breed = mongoose.model('Breed', breedSchema)

module.exports = Breed