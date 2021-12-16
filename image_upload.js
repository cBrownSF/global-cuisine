require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new AWS.S3({
  region,
  accessKey,
  secretAccessKey
});



function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Body: fileStream,
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.filename
  };

  return s3.upload(uploadParams).promise();
}


exports.uploadFile = uploadFile;
