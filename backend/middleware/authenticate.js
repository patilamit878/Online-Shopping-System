const jwt = require('jsonwebtoken')

const authenticate =async (req, res, next) => {
  try {
    //Extract Authorization Token
    const token = req.headers['authorization']
    jwt.verify(token, process.env.JWT_SECRET)
    next();
  } catch (error) {
    res.status(500).json({
      error: error,
    })
  }
//   try {
//     const token = req.headers["authorization"].split(" ")[1];
//     jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
//       if (err) {
//         return res.status(200).send({
//           message: "Auth Fialed",
//           success: false,
//         });
//       } else {
//         req.body.userId = decode.id;
//         next();
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       message: "Auth Failed",
//       success: false,
//     });
//   }
}


module.exports = authenticate
