const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'Your cloudinary name',
  api_key: 'Your cloudinary api_key',
  api_secret: 'Your cloudinary api_secret',
  secure: true,
})

module.exports = cloudinary
