const Plants = require("../models/Plants.model");
const User = require("../models/user.model");

const getUser = async (req,res)  => {
  try{
      console.log(req.session.currentUser)
      const user = await User.findById(req.session.currentUser._id).populate("createdPlants").lean();
      console.log("Usuario check",user)
      //const plantsWithOptions = plantsUser.map(plantsWithDeleteOptions) 
      res.render("user/profile", {user})

  }catch(err){
      res.send(err)
  }
};


 const deleteFormOptions = (plantsId) => ({
   action: `/user/profile/${plantsId}`,
   btnText: "Delete plants",
   method: "POST",
   restMethod: "DELETE",
 });
 
 function plantsWithDeleteOptions(plants) {
   const deleteOptions = deleteFormOptions(plants._id);
   return {
     ...plants,
     ...deleteOptions,
   };
 }
 
 const getPlants = async (req, res) => {
   try {
     const plantsUser = await Plants.find().lean();
     const plantsWithOptions = plantsUser.map(plantsWithDeleteOptions) 
     res.render("user/profile.hbs", { plantProfile: plantsWithOptions });
   } catch (err) {
     console.error(err);
   }
 };
 
 const editFormOptions = (plantsId) => ({
   action: `/profile/${plantsId}`,
   btnText: "edit plant",
   method: "POST",
   restMethod: "PATCH",
 });
 
 const getPlant = async (req, res) => {
   try {
     const { plantsId } = req.params;
     const plantsUser = await Plants.findById(plantsId).lean();
     res.render("plant-details", {
       ...editFormOptions(plantsId),
       ...plantsUser,
     });
   } catch (err) {
     console.error(err);
   }
 };
 
 const createPlants = async (req, res) => {
   try {
     const { name, description } = req.body;
     const image = req.file.path;
     const author = req.session.currentUser._id
     const plantsUser = await Plants.create({ name, image, description, author });
     const updatedUser = await User.findOneAndUpdate({_id:req.session.currentUser._id},{ $push : {"createdPlants" :  plantsUser._id  }})
     console.log("Update User",updatedUser)
     console.log("plants User", plantsUser);
     res.redirect("/profile");
   } catch (err) {
     console.error(err);
   }
 };
 
 const updatePlants = async (req, res) => {
   try {
     const { plantsId } = req.params;
     const { name, description } = req.body;
     let imageUrl;
    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = req.body.existingImage;
    }
     const updatedplants = await Plants.findByIdAndUpdate( plantsId, {
       name,
       imageUrl,
       description,
     },{new: true});
     console.log(updatedplants);
     res.redirect(`/profile/${plantsId}`);
   } catch (err) {
     console.log(err);
   }
 };
 
 const deletePlants = async (req, res) => {
   try {
     const { plantsId } = req.params;
     const deletedplants = await Plants.findByIdAndDelete(plantsId);
     console.log("deleted plants", deletedplants);
     res.redirect("/profile");
   } catch (err) {
     console.log(err);
   }
 };

module.exports = {
  getUser,
  getPlants,
  getPlant,
  createPlants,
  updatePlants,
  deletePlants,
};