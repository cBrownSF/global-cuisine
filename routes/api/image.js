const express = require("express");
const router = express.Router()

const upload = require('../../image_upload')

const singleImageUpload = upload.single('image')
router.post("/", upload.single('image'), function(req,res) {

  return res.json({'imageURL':req.file.location,})

})

module.exports = router;