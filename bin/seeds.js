const mongoose = require("mongoose");
const Plants = require("../models/Plants.model");
const { listPlants } = require("./data");

async function seedDb() {
  try {
    await Plants.create(listPlants);
    const closedDb = await mongoose.connection.close();
    console.log("close", closedDb);
  } catch (err) {
    console.error(err);
  }
}

seedDb();