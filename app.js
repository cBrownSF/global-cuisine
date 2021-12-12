const express = require("express");
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const User = require("./models/User");
const listings = require("./routes/api/listings");
const users = require("./routes/api/users");
const reviews = require("./routes/api/reviews")
const bodyParser = require("body-parser");
const passport = require("passport");
const Listing = require("./models/Listing");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

  app.use(passport.initialize());
  require("./config/passport")(passport);
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/api/users", users)
  app.use("/api/listings", listings)
  app.use("/api/reviews", reviews)
  app.use(express.static("public"));
 
// app.get("/", (req, res) => {
//   const user = new User({
//     username: "jim",
//     email: "jim@jim.com",
//     password: "jim1234"
//   })
//   user.save()
//   res.send("helloworld");
// })

app.post('/images', upload.single('picture'), (req, res) => {
  res.send("<3")
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
