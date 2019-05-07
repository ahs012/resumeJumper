const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  companyName: { type: String, required: true },
  title: { type: String, required: true },
  address: {type : String, required: true},
  skills: {type : String, required: true},
  start: { type: Number, required: true },
  end: { type: Number, required: true },
  tech: {type : String, required: true},
  majorAccomplish: {type : String, required: true},
  project: {type : String, required: true},
  date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;