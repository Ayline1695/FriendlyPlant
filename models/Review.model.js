const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    plant: {
      type: Schema.Types.ObjectId,
      ref: "Plant",
    },
    reviews: [
      {
        author: { 
          type: Schema.Types.ObjectId, 
          ref: "User" },
        message: String,
      },
    ],})

module.exports = model('Review', reviewSchema);