const express = require("express");
const router = express.Router();
const passport = require('passport')
const validateListingInput = require('../../validations/listing');
const Listing = require('../../models/Listing')

router.get("/", (req, res) => {
    Listing.find()
    // .then((listings) => {
    //     res.json(listings).catch((err) => res.status(404).json({ nolistingsfound: "No listings found" }));
    // })
    // res.json({ msg: "This is the listing route" })
});

router.post("/",
passport.authenticate("jwt", { session: false }), 
(req, res) => {
    const { errors, isValid } = validateListingInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors)
    }

    const newListing = new Listing({
        author: req.user.id,
        title: req.body.title,
        country: req.body.country,
        authorname: req.body.authername,
        difficulty: req.body.difficulty,
        servings: req.body.servings,
        details: req.body.details,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })
    newListing.save().then((listing) => res.json(listing));
    }
)

module.exports = router