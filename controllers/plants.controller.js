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

  const getPlant = async (req, res) => {
    try {
      const { plantId } = req.params;
      const plants = await Plants.findById(plantId);
      console.log(plants);
      res.render("plants/details.hbs", plants);
    } catch (err) {
      console.log(err);
    }
  };

  module.exports = {
    getPlants,getPlant}