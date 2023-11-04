const Pet = require("../models/pet")
const Breed = require("../models/breed")
const Shelter = require("../models/shelter")

const searchAllPets = async (req, res) => {
    try {
        const pets = await Pet.find({})
        return res.json({"result": pets})
    } catch (e) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createPet = async (req, res) => {

    if(req.headers.authentication == null || !adminKeys.includes(req.headers.authentication)) {
        console.log(req.headers.authentication)
        res.status(403).json({"reason:":"Invalid or Null Auth-token"})
        return
    }

    if(req.body.shelter == null) {
        res.status(400).json({"reason": "Shelter's ID missing"})
        return
    }

    if(req.body.shelterId == null || req.body.name == null || req.body.breed == null) {
        res.status(400).json({"reason": "The Pet's shelter ID, name, or breed is missing"})
        return
    }

    //Does the breed exist?
    const breed = await Breed.findOne({name: req.body.breed})
    if(!breed) {
        res.status(400).json({"reason": "No such breed exists"})
        return
    }

    //Does the shelter exist?
    const id = new mongoose.Types.ObjectId(req.body.shelter)
    const shelter = await Shelter.findOne({_id: id});
    console.log(shelter)
    if (!shelter) {
        res.status(400).json({"reason": "Invalid shelter ID"})
        return
    }

    //Does the shelter already have a dog with the same shelterID?
    const existingPet = await Pet.findOne({
        shelterId: req.body.shelterId,
      });
    
      if(existingPet) {
        res.status(400).json({"reason": "A dog with the same shelter ID already exists"});
        return
      }

      const pet = await Pet.create({
        name: req.body.name,
        breed: breed._id,
        shelter: shelter._id,
        shelterId: req.body.shelterId
      })

      shelter.petCount++;
     await shelter.save();

     res.json({"result": pet})

}

module.exports = {searchAllPets, createPet}