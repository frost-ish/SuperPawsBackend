const mongoose = require("mongoose")

const petSchema = new mongoose.Schema({
    name: String,
    shelterId: String,
    breed: {type: mongoose.Schema.Types.ObjectId, ref: 'Breed'},
    shelter: {type: mongoose.Schema.Types.ObjectId, ref: 'Shelter'},
    images: {type: [String]}
})

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet