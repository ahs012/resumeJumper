const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: {type : String, required: true},
  nameOnCard: {type : String, required: true},
  cardNumber: {type : Number, required: true},
  securityCode: {type : Number, required: true},
  postal: {type : Number, required: true},
  date: { type: Date},
  resume: [{
    type:Schema.Types.ObjectId,
    ref: "Resume"
  }],
});


const User = mongoose.model("User", userSchema);

module.exports = User;
