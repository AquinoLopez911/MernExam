const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");


class PetController {
    getAll(req, res) {
        Pet.find().sort('type').exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }
    create(req, res) {
        let pet = new Pet(req.body);
        pet.save()
            .then(() => res.json({status: "Pet Created"}))
            .catch(err => res.json(err));
    }
    getOne(req, res) {
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
    update(req, res) {
        Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({status: `pet has been updated`}))
            .catch(err => res.json(err));
    }
    delete(req, res) {
        Pet.remove({_id: req.params._id})
            .then(() => res.json({status: `pet ${req.params._id} has been deleted`}))
            .catch(err => res.json(err));
    }
    
}

module.exports = new PetController();