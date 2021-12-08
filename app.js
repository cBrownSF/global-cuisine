const express = require("express");
const app = express();
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
  
app.get("/", (req, res) => {
  const user = new User({
    username: "jim",
    email: "jim@jim.com",
    password: "jim1234"
  })
  user.save()
  res.send("helloworld");
})


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
