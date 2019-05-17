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
    return axios.get("/api/resume");
  },
  deleteResume: function(name){
    return axios.delete("/api/resume" + name)
  },
  saveResume: function(resumeData) {
    return axios.post("/api/resume", resumeData);
  },
  getJob: function(){
    return axios.get("/api/job/job")
  },
  saveJob: function(){
    return axios.post("api/job")
  },
  deleteJob: function(name){
    return axios.delete("/api/job" + name)
  },
  updatejob: function(name){
    return axios.post("/api/job/" + name)
  }
};
