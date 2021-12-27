require('dotenv').config()
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new AWS.S3({
  secretAccessKey: process.env.SECRET_KEY,
  accessKeyId: process.env.ACCESS_KEY,
  region: 'us-west-1'
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "global-cuisine-bucket-final",
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.originalname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})


module.exports = upload;
