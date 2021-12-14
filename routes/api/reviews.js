const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
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

  router.get("/:id", (req, res) => {
    Review
      .findById(req.body.id)
      .then((review) => res.json(review))
      .catch((err) => res.status(404).json({ noreviewfound: "No review found with that Id" }));
  });

  router.get("/user/:userId", (req, res) => {
    Review
    .find({ author_id: req.params.userId })
    .then(reviews => res.json(reviews))
    .catch((err) => res.status(404).json({ noreviewsfound: "This user has not created any reviews" }));
})

router.get("/listing/:listingId", (req, res) => {
    Review
    .find({ listing_id: req.params.listingId })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json(err));
})


// router.get("/:id", (req, res) => {
//     Listing
//     .findById(req.params.id)
//     .then(review => res.json(review))
//     .catch(err => res.status(400).json(err));
// })

  
  router.post("/:listingId", 
      passport.authenticate("jwt", {session: false}),
      (req, res) => {
          const {isValid, errors} = validateReviewInput(req.body);

          if(!isValid){
              return res.status(400).json(errors);
          }
          const newReview = new Review({
              author_id: req.user.id,
              listing_id: req.body.listing_id,
              reviewer_name: req.body.reviewer_name,
              score: req.body.score,
              review: req.body.review

          });
          newReview.save().then((review) => res.json(review))
      }
  )

  router.patch(
    '/:id',
    passport.authenticate('jwt', {session:false}),
    (req, res) => {
        const {isValid, errors} = validateReviewInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }
        Review.findById(req.params.id).then((review) => {
            if(!review){
                errors.review = "No review found with that ID";
                return res.status(404).json(errors);
            }else{
                review.review = req.body.review,
                review.score = req.body.score,
                review.reviewer_name = req.body.reviewer_name;
                review.save().then((review) => res.json(review));
            }
        })
    }
)

router.delete(
    "/:id",
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
                Review.deleteOne({_id: req.params.id}).then(() => {
                    return res.status(200).json({success: "Successfully deleted"})
                })
    }
)

  
  module.exports = router;