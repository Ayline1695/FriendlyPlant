const Review = require("../models/Review.model");
const User = require("../models/user.model");
const Plant = require("../models/Plants.model");


const createReview = async (req,res)  => {
    let plantId = req.params.plantId;
    const authorId = req.session.currentUser._id
    const {message} = req.body
    try{
// create plant
//const plant = await Plant.findById(plantId);
const newReviews = await Review.create({ plant: plantId, "review.author": authorId, "review.message" : message });
await User.findByIdAndUpdate(authorId,{$push: {reviews: newReviews._id}})
await Plant.findByIdAndUpdate(plantId,{$push: {reviews: newReviews._id}})
res.redirect(`/list/${plantId}`)
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
module.exports = { createReview, getReviewspage }