const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/
    const mimeType = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if (mimeType && extname) {
      return cb(null, true)
    }
    cb('Give proper file format')
  },
})

module.exports = upload