const express = require("express");
const app=express()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/images', upload.single('image') (req,res)=>{
  res.send('yes')
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));