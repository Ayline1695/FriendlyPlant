const { Router } = require("express");
const fileUploader = require('../configs/cloudinary.config');

function isLoggedIn(req, res, next) {
    if(req.session.currentUser) next();
    else res.redirect('/login');
  }


  const {
    getUser,
    getPlant,
    getPlants,
    createPlants,
    updatePlants,
    deletePlants,
  } = require("../controllers/user.controllers");
  const router = Router();
  router
    .get("/profile", isLoggedIn, getUser)
    .get("/profile/:plantsId", isLoggedIn, getPlant)
    .post("/profile",isLoggedIn, fileUploader.single('image'), createPlants)
    .patch("/profile/:plantsId", isLoggedIn, fileUploader.single('image'), updatePlants)
    .delete("/profile/:plantsId", isLoggedIn, deletePlants);
  
  module.exports = router;