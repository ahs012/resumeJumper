const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  owner:{
    type:String
   
  },
  name: { type: String, required: true },
  jobs: [{
      type:Schema.Types.ObjectId,
      ref: "Job"
    }],
  address: {type : String, required: true},
  skills: {type : String, required: true},
  tech: {type : String, required: true},
  date: { type: Date, default: Date.now }
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
