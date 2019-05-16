const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  companyName: { type: String, required: true },
  title: { type: String, required: true },
  jobAddress: {type : String, required: true},
  jobSkills: {type : String, required: true},
  start: { type: Number, required: true },
  end: { type: Number, required: false },
  jobTech: {type : String, required: true},
  majorAccomplish: {type : String, required: true},
  project: {type : String, required: true},
  date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;
//db.jobs.insertOne('companyName')