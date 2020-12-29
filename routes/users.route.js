const { Router } = require("express");

function isLoggedIn(req, res, next) {
    if(req.session.currentUser) next();
    else res.redirect('/login');
  }


  const {
    getPlants,
    createPlants,
    updatePlants,
    deletePlants,
  } = require("../controllers/user.controllers");
  const router = Router();
  
  router
    .get("/", isLoggedIn, getPlants)
    .get("/:plantsId", isLoggedIn, getPLants)
    .post("/", createPlants)
    .patch("/:celebrityId", isLoggedIn, updatePlants)
    .delete("/:celebrityId", isLoggedIn, deletePlants);
  
  module.exports = router;