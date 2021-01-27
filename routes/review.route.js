const express = require('express');
const router = express.Router();
const {
    getReview,getReviewspage
  } = require("../controllers/review.controller");

function isLoggedIn(req, res, next) {
    if(req.session.currentUser) next();
    else res.redirect('/login');
  }

router
.get("/list/:plantId", isLoggedIn, getReviewspage)
.post("/list/:reviewId", isLoggedIn, getReview)


module.exports = router;