const express = require("express")
const bcrypt = require('bcrypt')
const validator = require('validator')
const cookieParser = require('cookie-parser')
const app = express()
const connectDB = require('./database')
const mongoose = require("mongoose")
const UserModel = require("./models/User")
const { validateSignUpApi } = require("./utils/validation")
const jwt = require('jsonwebtoken')
const { userAuth } = require("./middlewares/auth")

app.use(express.json())
app.use(cookieParser())
//todo  Signup API
app.post('/signUp', async (req, res, next) => {
    const { firstName, lastName, emailId, password , gender, age, photoUrl, about, skills } = req.body
    try {
        //? Data validation
        validateSignUpApi(req)

        //? encrypt password
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new UserModel({ firstName, lastName, emailId, password: hashedPassword, gender, age, photoUrl, about, skills })
        await user.save()
        res.send('User Sign Up successful !!')
    } catch (err) {
        console.error('Signup error:', err.message); // Log the detailed error message
        res.status(403).send(`ERROR : ${err.message}`); // Return the error message
    }

})

app.post('/login', async (req, res, next) => {
    const { emailId, password } = req.body

    try {
        if (!validator.isEmail(emailId)) {
            throw (new Error('Invalid Email'))
        }


        const user  = await UserModel.findOne({emailId:emailId})
        if(!user){
            throw (new Error('Invalid Credentials !!'))
        }

        const isPasswordValid = user.validatePassword(password)
        
        if(!isPasswordValid){
            throw (new Error('Invalid Credentials !!'))
        }

        const token = await user.getJWT();

        res.cookie('token',token);
        res.send('Login Successfull !!!')

    } catch (err) {
        res.status(403).send(`ERROR : ${err.message}`)
    }

})

//todo Profile API

app.get('/profile',userAuth , async (req, res, next) => {
    try {
        res.send(req.user)
    } catch (err) {
        res.status(403).send('ERROR : ' + err.message)
    }
})


//todo connection request API

app.get('/connectionRequest',userAuth , async (req, res, next) => {
    try {
        res.send(`Connection Request from ${req.user.firstName} ${req.user.lastName}`)
    } catch (err) {
        res.status(403).send('ERROR : ' + err.message)
    }
})

connectDB().then(
    () => {
        console.log('Database connection made successfully')

        app.listen(1990, () => {
            console.log('Express server is running on port 1990')
        })
    }
).catch(
    (err) => {
        console.log('Database connection failed')
    }
)









