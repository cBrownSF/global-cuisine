
const S3 = require('aws-sdk/clients/s3')
const express = require("express");
const app = express();
const cors = require('cors')
const multer = require('multer');
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
const likes = require("./routes/api/likes")

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

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
app.use("/api/likes", likes)
app.use(express.static("public"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("frontend/build"));
//   app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }

app.use(cors)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
