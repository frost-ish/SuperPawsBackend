const mongoose = require("mongoose")

const shelterSchema = new mongoose.Schema({
    name: String,
    petCount: Number,
    address: String,
    images: {
        type: [String]
    }
})

const Shelter = mongoose.model('Shelter', shelterSchema)

module.exports = Shelter