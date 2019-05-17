import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given name
  getUser: function(email) {
    return axios.get("/api/user/" + email);
  },
  // Deletes the user with the given name
  deleteUser: function(name) {
    return axios.delete("/api/user/" + name);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  getResume: function() {
    return axios.get("/api/resume/resume");
  },
  deleteResume: function(name){
    return axios.delete("/api/resume/resume" + name)
  },
  saveResume: function(resumeData) {
    console.log(resumeData);
    return axios.post("/api/resume/resume", resumeData);
  },
  getJob: function(){
    return axios.get("/api/job/job")
  },
  saveJob: function(jobData){
    console.log("API job post hit", jobData)
    return axios.post("api/job/job", jobData)
  },
  deleteJob: function(name){
    return axios.delete("/api/job" + name)
  },
  updatejob: function(name){
    return axios.post("/api/job/" + name)
  }
};
