import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given name
  getUser: function(name) {
    return axios.get("/api/user/" + name);
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
};
