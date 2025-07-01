const express = require('express');
const { userAuth } = require('../middlewares/userAuth');
const { validateEditProfileData } = require('../utils/validation');
const UserModel = require('../models/User');
const profileRouter = express.Router();
const bcrypt = require('bcrypt')

//todo Profile API
profileRouter.get('/profile/view',userAuth , async (req, res, next) => {
    try {
        return res.send(req.user)
    } catch (err) {
        return res.status(403).send('ERROR : ' + err.message)
    }
})

profileRouter.patch('/profile/edit', userAuth , async (req, res, next) => {
    try {
        if(!validateEditProfileData(req)){
            throw (new Error('Invalid edit data for profile'))
        }

        const loggedInUser = req.user

        Object.keys(req.body).forEach((key) => {
          loggedInUser[key] = req.body[key]  
        })

        loggedInUser.save()

        return res.send(`${loggedInUser.firstName} ${loggedInUser.lastName} your profile has been updated successfully !!`)

    } catch (err) {
        return res.status(403).send('ERROR : ' + err.message)
    }
})

profileRouter.patch('/profile/forgetPassword', userAuth , async (req, res, next) => {
    try {
        const loggedInUser = req.user
        const {password } = loggedInUser
        const { newPassword } = req.body

        if(newPassword){
            const allowdUpdates = ['newPassword']

            if(!Object.keys(req.body).every((key) => allowdUpdates.includes(key))){
                throw (new Error('Invalid Keys Detected !! Only newPassword is allowed'))
            }


            const isNewPasswordValid = await loggedInUser.validatePassword(newPassword)

            if(!isNewPasswordValid){
                throw (new Error('Invalid new password !! Please enter a strong password'))
            }

            const isNewPasswordSame = await bcrypt.compare(newPassword, password)

            if(isNewPasswordSame){
                throw (new Error('New password cannot be same as old password'))
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10)
            loggedInUser.password = hashedPassword

            loggedInUser.save()

            return res.send(`${loggedInUser.firstName} ${loggedInUser.lastName} your password has been updated successfully !!`)

        } else{
            throw (new Error('Please enter new password'))
        }


    } catch (err) {
        return res.status(403).send('ERROR : ' + err.message)
    }
})

module.exports = profileRouter;
