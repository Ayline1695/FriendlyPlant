const { Schema, model } = require('mongoose');
 
const plantsSchema = new Schema({
name: String,
image: String,
description: String,
})

module.exports = model('Plants', plantsSchema);