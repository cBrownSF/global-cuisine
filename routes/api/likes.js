const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Like = require("../../models/Like");


router.get("/test", (req, res) => {
    res.json({ msg: "This is the like route" });
})

router.get("/", (req, res) => {
    Like.find()
      .then((likes) => res.json(likes))
      .catch((err) => res.status(404).json({ nolikesfound: "No like found" }));
  });

  router.get("/:id", (req, res) => {
    Like
      .findById(req.params.id)
      .then((like) => res.json(like))
      .catch((err) => res.status(404).json({ nolikefound: "No like found with that Id" }));
  });

  router.get("/user/:userId", (req, res) => {
    Like
    .find({ liker_id: req.params.userId })
    .then(likes => res.json(likes))
    .catch((err) => res.status(404).json({ nolikesfound: "This user has not liked any recipes" }));
})

router.get("/listing/:listingId", (req, res) => {
    Like
    .find({ listing_id: req.params.listingId })
    .then(likes => res.json(likes))
    .catch(err => res.status(400).json(err));
})

  
  router.post("/listing/:listingId", 
      passport.authenticate("jwt", {session: false}),
      (req, res) => {
          const newLike = new Like({
              liker_id: req.user.id,
              listing_id: req.params.listingId,
          });
          newLike.save().then((like) => res.json(like))
      }
  )

router.delete(
    "/:id",
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
                Like.deleteOne({_id: req.params.id}).then(() => {
                    return res.status(200).json({success: "Successfully unliked"})
                })
    }
)

  
  module.exports = router;