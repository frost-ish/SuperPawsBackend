const { adminKeys } = require("../constants/adminKeys");
const Breed = require("../models/breed")

const createBreed = async (req, res) => {
    if(req.headers.authentication == null || !adminKeys.includes(req.headers.authentication)) {
        console.log(req.headers.authentication)
        res.status(403).json({"reason:":"Invalid or Null Auth-token"})
        return
    }

    if(req.body.name == null || req.body.friendliness == null || req.body.aggression == null) {
        res.status(400).json({"reason": "Breed name, friendliness, or aggression is missing"})
        return
    }

    const breed = await Breed.create({name: req.body.name, friendliness: req.body.friendliness, aggression: req.body.aggression})

    res.status(200).json({"result": breed})
}

const getAllBreeds = async (req, res) => {
    const breeds = await Breed.find();
    res.status(200).json({"result": breeds})
}

module.exports = {getAllBreeds, createBreed}