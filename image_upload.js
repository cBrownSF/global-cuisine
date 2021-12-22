require('dotenv').config();
const fs = require('fs');
const AWS= require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const app = express()
const s3 = new AWS.S3({ 
  secretAccessKey,
  accessKey,
  region
})

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "global-cuisine-bucket-final",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})
