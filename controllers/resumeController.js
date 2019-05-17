const db = require("../models");

module.exports={
    create: function(req, res) {
      console.log(req);
        db.Resume
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(500).json(err));
    },
    update: function(req, res) {
        db.Resume
          .findOneAndUpdate({ _name: req.params.name }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findByName: function(req, res) {
        db.Resume
          .findByName(req.params.name)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Resume
          .findByName({ _name: req.params.name })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findAll: function(req, res) {
        db.Resume
          .find({})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};