const express = require('express');
const router = express.Router();
const {
    getPlants,
  } = require("../controllers/plants.controller");

function isLoggedIn(req, res, next) {
    if(req.session.currentUser) next();
    else res.redirect('/login');
  }

router
.get("/list", isLoggedIn, getPlants)


module.exports = router;