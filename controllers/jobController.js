const db = require("../models");

module.exports={
    create: function(req, res) {
      console.log("job create hit");
      console.log("request: "+req); 
      const {      
        companyName,
        title,
        jobAddress,
        jobSkills,
        start,
        end,
        jobTech,
        majorAccomplish,
        project} = req.body

        db.Job
          .create({  
            companyName,
            title,
            jobAddress,
            jobSkills,
            start,
            end,
            jobTech,
            majorAccomplish,
            project})
          .then(dbModel =>{ 
            res.json(dbModel)
            const {_id}=dbModel;
            console.log("id" + _id);
            db.Resume.findOneAndUpdate({_id: req.body.currentRes}, {$push:{jobs:_id}}, {new:true})
            .then((job) => console.log(job));
          })
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
          .find({})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(500).json(err));
      },

      getJobByResume: function(req,res){
        console.log(req.params);
        db.Job
          .findById({_id:req.body.currentResume})
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