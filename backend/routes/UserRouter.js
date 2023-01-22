const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')
const ErrorHandler = require('../utils/errorHandler')
const Jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')

//Register a user
router.post('/register', upload.single('avatar'), async(req, res) => {
    try {
        //upload avatar to cloudinary
        let result = await cloudinary.uploader.upload(req.file.path)
            // const result = await cloudinary.uploader.upload(req.file.avatar)

        //create new user
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            number: req.body.number,
            password: req.body.password,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
        })
        let data = await user.save()
            // sendToken(user, 201, res)
        Jwt.sign({ data },
            process.env.JWT_SECRET, { expiresIn: '5d' },
            (err, token) => {
                if (err) {
                    // res.send({ result: "something went wrong, Please try again" })
                    return res.status(500).JSON({
                        message: 'Authentication Failed',
                    })
                } else {
                    res.send({ data, token })
                }
            },
        )
    } catch (err) {
        console.log(err)
    }
})

router.post('/login', async(req, res, next) => {
        const { email, password } = req.body
            // checking if user has given email and password

        if (!email || !password) {
            return next(new ErrorHandler('Please Enter Email & Password', 400))
        }
        const user = await User.findOne({ email }).select('+password')

        if (!user) {
            return next(new ErrorHandler('Invalid Email & Password', 401))
        }

        const isPasswordMatched = user.comparePassword(password)

        if (!isPasswordMatched) {
            return next(new ErrorHandler('Invalid Email & Password', 401))
        }

        // sendToken(user, 200, res)
        Jwt.sign({ user },
            process.env.JWT_SECRET, { expiresIn: '5d' },
            (err, token) => {
                if (err) {
                    res.send({ result: 'something went wrong, Please try again' })
                }
                res.send({ user, token })
            },
        )
    }),
    //Update User Profile
    router.put(
        '/updateUserProfile/:id', authenticate,
        upload.single('avatar'),
        async(req, res) => {
            try {
                let user = await User.findById(req.params.id)
                    //Delete image from cloudinary
                await cloudinary.uploader.destroy(user.cloudinary_id)
                    //Upload image to cloudinary
                let result
                if (req.file) {
                    result = await cloudinary.uploader.upload(req.file.path)
                }
                const data = {
                    firstName: req.body.firstName || user.firstName,
                    lastName: req.body.lastName || user.lastName,
                    email: req.body.email || user.email,
                    number: req.body.number || user.number,
                    avatar: result?.secure_url || user.avatar,
                    cloudinary_id: result?.public_id || user.cloudinary_id,
                }
                user = await User.findByIdAndUpdate(req.params.id, data, {
                    new: true,
                })
                res.json(user)
            } catch (error) {
                console.log(error)
            }
        },
    )

//Get Single User Details
router.get('/userDetails/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json(`Error:${err}`))
})

//Admin-- create user
router.post('/admin/addUser', upload.single('avatar'), async(req, res) => {
    try {
        //upload image to cloudinary

        const result = await cloudinary.uploader.upload(req.file.path)

        //create new user
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            number: req.body.number,
            password: req.body.password,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
            role: req.body.role,
        })
        await user.save()
        res.json(user)
    } catch (err) {
        console.log(err)
    }
})

//Admin--get All Users
router.get('/admin/getAllUsers', (req, res) => {
    User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json(`Error:${err}`))
})

//Admin--delete User
router.delete('/admin/deleteUser/:id', async(req, res) => {
    try {
        //find user by id
        let user = await User.findById(req.params.id)
            //delete image from cloudinary
        await cloudinary.uploader.destroy(user.cloudinary_id)
            //delete user from db
        await user.remove()
        res.json(user)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router