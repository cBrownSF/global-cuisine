const express = require("express");
const router = express.Router();
const multer = require("multer")
const passport = require("passport");
const Listing = require("../../models/Listing");
const validateListingInput = require("../../validations/listings");
const jwt = require('jsonwebtoken');

router.get("/test", (req, res) => {
  Listing.find()
    .then((listings) => res.json(listings))
    .catch((err) => res.status(404).json({ nolistingsfound: "No listing found" }));
});

router.get("/", (req, res) => {
    Listing
    .find()
    .sort({ date: -1 })
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json(err));
});


router.get("/user/:user_id", (req, res) => {
    Listing
    .find({ author_id: req.params.user_id })
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json(err));
})

router.get("/:id", (req, res) => {
    Listing
    .findById(req.params.id)
    .then(listing => res.json(listing))
    .catch(err => res.status(400).json(err));
})

const upload = require('../../image_upload')

router.post("/",
  passport.authenticate("jwt", { session: false }), upload.single('picture'),
  (req, res) => {
    const { isValid, errors } = validateListingInput(req.body, req.file);
    console.log("ERROR HERE", errors)
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newListing = new Listing({
      author_id: req.user.id,
      name: req.body.name,
      ingredients: req.body.ingredients,
      instruction: req.body.instruction,
      details: req.body.details,
      difficulty: req.body.difficulty,
      title: req.body.title,
      picture: req.file.location,
      country: req.body.country,
      servings: req.body.servings
    });
    newListing.save().then((listing) => res.json(listing))
  }
)

router.patch(
  '/:id/update',
  passport.authenticate('jwt', { session: false }), upload.single('picture'),
  (req, res) => {
    const { isValid, errors } = validateListingInput(req.body, req.file);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Listing.findById(req.params.id).then((listing) => {
      if (!listing) {
        errors.listing = "No recipe found with that ID";
        return res.status(404).json(errors);
      } else {
        listing.name = req.body.name,
          listing.ingredients = req.body.ingredients,
          listing.country = req.body.country,
          listing.details = req.body.details,
          listing.difficulty = req.body.difficulty,
          listing.servings = req.body.servings,
          listing.picture = req.file.location;
        listing.title = req.body.title;
        listing.save().then((listing) => res.json(listing));
      }
    })
  }
)

router.delete(
    "/:id/delete",
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
                
        Listing.deleteOne({_id: req.params.id}).then(() => {
            return res.status(200).json({success: "Successfully deleted"})
         })
     }
)


module.exports = router;
