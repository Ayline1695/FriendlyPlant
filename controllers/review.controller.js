const Review = require("../models/Review.model");
const User = require("../models/user.model");
const Plant = require("../models/Plants.model");


const getReview = async (req,res)  => {
    try{
// create plant
const plant = await Plant.create(req.body);
const reviews = await Review.create({ plant: plant._id });
res.render("plants/details.hbs", { plant, reviews });
    }
    catch(err){
        console.error(err);
    }
}
const getReviewspage = async (req,res) => {
    try{
    const userId = req.session.currentUser;
   const {reviewId, plantId} = req.params
   const user = await User .findById(userId).lean()

// get plant by id
const plant = await Plant.findById(plantId).lean();
const review = await Review.findOne({ plant: plant._id }).lean();
   const updateReview = await Review.findOne({plant: plantId,review: reviewId}, {author: user.name, message: req.body.message})
   console.log("REVIEW!: ", updateReview)
   res.redirect('/list')

    }catch(err){console.error(err)}
}
module.exports = { getReview, getReviewspage }