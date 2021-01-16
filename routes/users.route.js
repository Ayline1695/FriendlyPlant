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
    getFavourites
  } = require("../controllers/user.controllers");
  const router = Router();
  router
    .get("/profile", isLoggedIn, getUser)
    .get("/profile/:plantsId", isLoggedIn, getPlant)
    .get("/profile/:plantsId", isLoggedIn, getPlants)
    .get("/plant-detail/:plantsId", isLoggedIn, getPlant)
    .get("/favourites", isLoggedIn, getFavourites)
    .post("/profile",isLoggedIn, fileUploader.single('image'), createPlants)
    .post("/profile/:plantsId/edit", isLoggedIn, fileUploader.single('image'), updatePlants)
    .post("/profile/:plantsId/delete", isLoggedIn, deletePlants);
  
  module.exports = router;