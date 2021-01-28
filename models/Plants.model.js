const { Schema, model, isValidObjectId } = require('mongoose');
 
const plantsSchema = new Schema({
name: String,
image: String,
description: String,
author: { 
    type: Schema.Types.ObjectId, 
    ref: "User" } ,
reviews:  [{ 
    type: Schema.Types.ObjectId, 
    ref: "Review" }],
},
{
    timestamps: true
})

module.exports = model('Plants', plantsSchema);