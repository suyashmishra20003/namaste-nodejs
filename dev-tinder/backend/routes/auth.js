const express = require('express')
const authRouter = express.Router()
const bcrypt = require('bcrypt')
const { validateSignUpApi } = require("../utils/validation")
const UserModel = require('../models/User')
const validator = require('validator')

//todo  Signup API
authRouter.post('/signUp', async (req, res, next) => {
    const { firstName, lastName, emailId, password , gender, age, photoUrl, about, skills } = req.body
    try {
        //? Data validation
        validateSignUpApi(req)

        //? encrypt password
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new UserModel({ firstName, lastName, emailId, password: hashedPassword, gender, age, photoUrl, about, skills })
        await user.save()
        return res.send('User Sign Up successful !!')
    } catch (err) {
        console.error('Signup error:', err.message); // Log the detailed error message
        return res.status(403).send(`ERROR : ${err.message}`); // Return the error message
    }

})

//todo Login API
authRouter.post('/login', async (req, res, next) => {
    const { emailId, password } = req.body

    try {
        if (!validator.isEmail(emailId)) {
            throw (new Error('Invalid Email'))
        }


        const user  = await UserModel.findOne({emailId:emailId})
        if(!user){
            throw (new Error('Invalid Credentials !!'))
        }

        const isPasswordValid = await user.validatePassword(password)
        
        if(!isPasswordValid){
            throw (new Error('Invalid Credentials !!'))
        }

        const token = await user.getJWT();

         res.cookie('token', token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
        });
        return res.send('Login Successfull !!!')

    } catch (err) {
        return res.status(403).send(`ERROR : ${err.message}`)
    }

})

//todo Logout API
authRouter.post('/logout', async (req,res,next) => {
    res.cookie('token',null,{
        expires:new Date(Date.now())
    })
    res.send('Logout Successfull !!!')
})


module.exports = authRouter;