require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');

const bucketName = "global-cuisine-bucket-final";
const region = "us-west-1";
const accessKey = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new AWS.S3({
  region,
  accessKey,
  secretAccessKey
});



function uploadFile(file) {
  console.log(bucketName)
  console.log(region)
  console.log(accessKey)
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Body: fileStream,
    Bucket: bucketName,
    Key: file.filename
  };

  return s3.upload(uploadParams).promise();
}


exports.uploadFile = uploadFile;
