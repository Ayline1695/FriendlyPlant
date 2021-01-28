const Plants = require("../models/Plants.model");
const User = require("../models/user.model");


const getPlants = async (req,res)  => {
      try{
        const { _id: userId } = req.session.currentUser;
        const { favoritesPlants } = await User.findById(userId).lean()
        
          const plantsList = await Plants.find({}).lean();
          //console.log(plantsList);
        
        const plants = plantsList.map(plant => {
        
       let isFavorite = false;
          favoritesPlants.forEach(favplant => {
              if (favplant._id.equals(plant._id)){
                isFavorite = true
              }
              
            });
            //console.log("IS FAV",isFavorite)
            //console.log("PLANTS ID",plant._id)
            return {
                ...plant,
                isFavorite
            }
       })
       console.log("PLANTS MAP:", plants)
          res.render("plants/list.hbs",{plants})
      }catch(err){
        console.log("ERROR: ",err)
          res.send(err)
      }
  };


  // buscar la información del usuario, session.currentUser
  // match entre las plantas que tiene el usuario y las que hay en la db, antes de pasarlas a la view y habrá que modificar por planta (key), si esa planta la tiene o no en favoritos, if id fav

  const getPlant = async (req, res) => {
    try {
      const { plantId } = req.params;
      const plants = await Plants.findById(plantId).populate([
'author',
        {
          path: 'reviews',
          populate: { path: 'review.author', model: 'User' }
        }
      ]);
      console.log(plants.reviews);
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