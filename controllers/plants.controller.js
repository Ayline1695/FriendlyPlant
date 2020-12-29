const Plants = require("../models/Plants.model");

const getPlants = async (req,res)  => {
      try{
          const plants = await Plants.find().lean();
          console.log(plants);
          res.render("plants/list.hbs",{plants})
      }catch(err){
          res.send(err)
      }
  };

  module.exports = {
    getPlants}