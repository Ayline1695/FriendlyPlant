const { Schema, model, isValidObjectId } = require('mongoose');
 
const plantsSchema = new Schema({
name: String,
image: String,
description: String,
author: { 
    type: Schema.Types.ObjectId, 
    ref: "User" } 
},{
    timestamps: true
})

module.exports = model('Plants', plantsSchema);