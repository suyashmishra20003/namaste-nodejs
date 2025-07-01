const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')


const userAuth = async (req, res, next) => {
    try {
        const reqCookie = req.cookies
        const { token } = reqCookie

        const decoded = jwt.verify(token, 'oneD19@1989')

        const user = await UserModel.findById(decoded._id)

        if (!user) {
            throw new Error('Please Login !!!')
        }

        req.user = user

        console.log(token)

        next()

    } catch (err) {
        res.status(403).send('ERROR: ' + err.message)
    }
}


module.exports = {
    userAuth
}