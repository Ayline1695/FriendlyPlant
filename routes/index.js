// routes/index.routes.js

const express = require('express');
const router = express.Router();

const userRouter = require('./users.route');


router.use("/index", userRouter);


// /* GET logout */
// router.get("/logout", (req, res) => {
//   req.session.destroy(err => {
//     if (err) {
//       // If unable to logout the user
//       res.redirect("/");
//     } else {
//       res.redirect("/login");
//     }
//   });
// });

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;