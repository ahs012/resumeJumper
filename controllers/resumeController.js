const db = require("../models");

module.exports={
    create: function(req, res) {
      
        db.Resume
          .create(req.body)
          .then(dbModel => {
            console.log(dbModel)
            const {_id}=dbModel;
            console.log(_id)
             db.User.findOneAndUpdate({userName:req.body.owner}, {$push:{resume:_id}}, {new:true})
            .then((user) => console.log(user));
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err)});
    },
    update: function(req, res) {
        db.Resume
          .findOneAndUpdate({ _name: req.params.name }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findByName: function(req, res) {
        db.Resume
          .find({owner:req.params.name})
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
      },
      find: function(req, res) {
        db.Resume
          .find({ _owner: req.params.name })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};