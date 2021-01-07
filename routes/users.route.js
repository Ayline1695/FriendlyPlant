const { Router } = require("express");

function isLoggedIn(req, res, next) {
    if(req.session.currentUser) next();
    else res.redirect('/login');
  }


  const {
    getUser,
    //getPlant,
    //createPlants,
    //updatePlants,
    //deletePlants,
  } = require("../controllers/user.controllers");
  const router = Router();
  
  router
    .get("/profile", isLoggedIn, getUser)
    //.get("/:plantsId", isLoggedIn, getPlant)
    //.post("/", createPlants)
    //.patch("/:plantsId", isLoggedIn, updatePlants)
    //.delete("/:plantsId", isLoggedIn, deletePlants);
  
  module.exports = router;