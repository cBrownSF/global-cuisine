const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({ msg: "This is the user route " });
  });

router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          return res.status(400).json({email: "Another user has already taken this email. Please choose another."})
        } else {
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          })
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
          })
        }
      })
  })

  module.exports = router;