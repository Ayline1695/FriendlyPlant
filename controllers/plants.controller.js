const Plants = require("../models/Plants.model");
const User = require("../models/user.model");

const getPlants = async (req,res)  => {
      try{
        const { _id: userId } = req.session.currentUser;
        const { favoritesPlants } = await User.findById(userId).lean()
          const plantsList = await Plants.find({}).lean();
          console.log(plantsList);
          const plants = plantsList.map(plant => {
            const isFavorite = favoritesPlants.includes(plant._id)
            return {
                ...plant,
                isFavorite
            }
        })
          res.render("plants/list.hbs",{plants})
      }catch(err){
          res.send(err)
      }
  };


  // buscar la información del usuario, session.currentUser
  // match entre las plantas que tiene el usuario y las que hay en la db, antes de pasarlas a la view y habrá que modificar por planta (key), si esa planta la tiene o no en favoritos, if id fav

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
  const esquejes = async (req,res) => {
    res.render("plants/esquejes.hbs")
  }
  const tips = async (req,res) => {
    res.render("plants/tips.hbs")
  }

  module.exports = {
    getPlants,getPlant, esquejes, tips}