const express = require("express");
const router = express.Router();
const passport = require("passport");
const Review = require("../../models/Review");
const validateReviewInput = require("../../validations/reviews")

router.get("/test", (req, res) => {
    res.json({ msg: "This is the review route" });
})

router.get("/", (req, res) => {
    Review.find()
      .then((reviews) => res.json(reviews))
      .catch((err) => res.status(404).json({ noreviewsfound: "No review found" }));
  });
  
  router.post("/", 
      passport.authenticate("jwt", {session: false}),
      (req, res) => {
          const {isValid, errors} = validateReviewInput(req.body);

          if(!isValid){
              return res.status(400).json(errors);
          }
          const newReview = new Review({
              author_id: req.user.id,
              listing_id: req.listing.id,
              reviewer_name: req.body.reviewer_name,
              score: req.body.score,
              review: req.body.review

          });
          newReview.save().then((review) => res.json(review))
      }
  )
  
  
  module.exports = router;