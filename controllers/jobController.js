const db = require("../models");

module.exports={
    create: function(req, res) {
        console.log(req);
        db.Job
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(500).json(err));
    },
    update: function(req, res) {
        db.Job
          .findOneAndUpdate({ _name: req.params.name }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(500).json(err));
      },

      get: function(req, res) {
        console.log('route hit')
        db.Job
          .find()
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(500).json(err));
      },

      remove: function(req, res) {
        db.Job
          .findByName({ _name: req.params.name })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(500).json(err));
      },

};