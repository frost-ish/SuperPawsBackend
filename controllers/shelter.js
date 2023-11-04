const Shelter = require("../models/shelter")
const {adminKeys} = require("../constants/adminKeys")

const createShelter = async (req, res) => {
    if(req.headers.authentication == null || !adminKeys.includes(req.headers.authentication)) {
        console.log(req.headers.authentication)
        res.status(403).json({"reason:":"Invalid or Null Auth-token"})
        return
    }

    if(req.body.address == null || req.body.name == null || req.body.dogCount == null) {
        res.status(400).json({"reason": "The fields name, address, and dogCount are either null, or invalid"})
        return
    }

    const shelter = await Shelter.create({address: req.body.address, name: req.body.name, dogCount: req.body.dogCount})

    res.status(200).json({"shelter": shelter})
}

const getShelters = async (req, res) => {
    const shelters = await Shelter.find()

    res.status(200).json({"result": shelters})
}

module.exports = {createShelter, getShelters}