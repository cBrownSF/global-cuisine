const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

// router.get("/test", (req, res) => {
//   res.json({ msg: "This is the user route " });
// });

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({
          email:
            "Another user has already taken this email. Please choose another.",
        });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "This user does not exist" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect password" });
      }
    });
  });
});

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }


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

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
    return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
    .then(user => {
        if(!user){
            return res.status(404).json({ email: "This user does not exist"});
        }

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch) {
               const payload = {
                   id: user.id,
                   username: user.username,
                   email: user.email
               }
               jwt.sign(
                   payload,
                   keys.secretOrKey,
                   { expiresIn: 3600 },
                   (err, token) => {
                       res.json({
                           success: true,
                           token: "Bearer " + token
                       });
                   }
               )
            } else {
                return res.status(400).json({password: "Incorrect password"})
            }
        })
    })
})

  module.exports = router;
