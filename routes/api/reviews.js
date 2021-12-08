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

  router.get("/user/:user_id", (req, res) => {
    Review
    .find({ user: req.params.user_id })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json(err));
})

router.get("/listing/:listing_id", (req, res) => {
    Review
    .find({ user: req.params.user_id })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json(err));
})


router.get("/:id", (req, res) => {
    Listing
    .findById(req.params.id)
    .then(review => res.json(review))
    .catch(err => res.status(400).json(err));
})

  
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

  router.patch(
    '/:id/update',
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
    "/:id/delete",
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        Review.findById(req.params.id).then((review) => {
                review.deleteOne({_id: req.params.id}).then(() => {
                    return res.status(200).json({success: "Successfully deleted"})
                })
        })
    }
)

  
  module.exports = router;