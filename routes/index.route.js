const express = require('express');
const router = express.Router();


// /* GET logout */
 router.get("/logout", (req, res) => {
   req.session.destroy(err => {
     if (err) {
       res.redirect("/");
     } else {
       res.redirect("/");
     }
   });
 });

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/home',(req, res, next) => res.render('home'));

module.exports = router;