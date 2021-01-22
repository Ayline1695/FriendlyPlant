const express = require('express');
const router = express.Router();
const {
    getPlants,getPlant, tips, esquejes
  } = require("../controllers/plants.controller");

function isLoggedIn(req, res, next) {
    if(req.session.currentUser) next();
    else res.redirect('/login');
  }

router
.get("/list", isLoggedIn, getPlants)
.get("/list/:plantId",isLoggedIn, getPlant)
.get("/esquejes",isLoggedIn, esquejes)
.get("/tips",isLoggedIn, tips)

module.exports = router;