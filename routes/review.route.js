const express = require('express');
const router = express.Router();
const {
    createReview,getReviewspage
  } = require("../controllers/review.controller");

function isLoggedIn(req, res, next) {
    if(req.session.currentUser) next();
    else res.redirect('/login');
  }

router
//.get("/list/:reviewId", isLoggedIn, getReviewspage)
.post("/list/:plantId/addreview", isLoggedIn, createReview)


module.exports = router;