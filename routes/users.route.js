const { Router } = require("express");

function isLoggedIn(req, res, next) {
    if(req.session.currentUser) next();
    else res.redirect('/login');
  }


  const {
    getPlants,
    getPlant,
    createPlants,
    updatePlants,
    deletePlants,
  } = require("../controllers/user.controllers");
  const router = Router();
  
  router
    .get("/", isLoggedIn, getPlants)
    .get("/:plantsId", isLoggedIn, getPlant)
    .post("/", createPlants)
    .patch("/:plantsId", isLoggedIn, updatePlants)
    .delete("/:plantsId", isLoggedIn, deletePlants);
  
  module.exports = router;