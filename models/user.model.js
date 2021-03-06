const { Schema, model } = require('mongoose');
 
const emailRegex = /^\S+@\S+\.\S+$/;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [emailRegex, "Please use a valid email address"],
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    },
    /*image: {
      type: String,
      default: [true, '/img/user.png'],
    },*/
    createdPlants: [ { type: Schema.Types.ObjectId, ref: "Plants" } ],
    favoritesPlants: [ { type: Schema.Types.ObjectId, ref: "Plants" } ],
    reviews:  [{ 
      type: Schema.Types.ObjectId, 
      ref: "Review" }],
  },
  {
    timestamps: true
  }
);
 
module.exports = model('User', userSchema);