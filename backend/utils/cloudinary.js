const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'dfcsk4yns',
  api_key: '928168375189515',
  api_secret: 'UUBKXsxUBFXnRhzxgu4uSZPNkUo',
  secure: true,
})

module.exports = cloudinary
