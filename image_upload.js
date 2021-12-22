require('dotenv').config()
const AWS= require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// const bucketName = process.env.AWS_BUCKET_NAME;
// const region = process.env.AWS_BUCKET_REGION;
// const accessKey = process.env.AWS_ACCESS_KEY;
// const secretAccessKey = process.env.AWS_SECRET_KEY;

// AWS.config.update({
//   secretAccessKey: process.env.SECRET_KEY,
//   accessKeyId: process.env.ACCESS_KEY,
//   region: 'us-west-1'
// })
const s3 = new AWS.S3({
  secretAccessKey: process.env.SECRET_KEY,
  accessKeyId: process.env.ACCESS_KEY,
  region: 'us-west-1'
});



console.log(process.env.ACCESS_KEY)
console.log(process.env.SECRET_KEY)
console.log(process.env.BUCKET_NAME)
console.log(AWS)
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "global-cuisine-bucket-final",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;