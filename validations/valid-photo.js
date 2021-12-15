const validImg = file =>{
if (typeof file.data === "undefined") {
  errors.file = "Problem with sending data"
}
}

const validText = str => {
  return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validImg;