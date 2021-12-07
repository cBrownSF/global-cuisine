const express = require("express");
const router = express.Router();
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
    .find({ user: req.params.user_id })
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json(err));
})

router.get("/:id", (req, res) => {
    Listing
    .findById(req.params.id)
    .then(listing => res.json(listing))
    .catch(err => res.status(400).json(err));

})


router.post("/", 
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const {isValid, errors} = validateListingInput(req.body);
        // console.log("hello i am here")
        if(!isValid){
            return res.status(400).json(errors);
        }
        const newListing = new Listing({
            author_id: req.user.id,
            author_name: req.body.author_name,
            ingredients: req.body.ingredients,
            instruction: req.body.instruction,
            details: req.body.details,
            difficulty: req.body.difficulty,
            title: req.body.title,
            picture: req.body.picture
        });
        newListing.save().then((listing) => res.json(listing))
    }
)


module.exports = router;
