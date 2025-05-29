const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')


const userAuth = async (req, res, next) => {
    try {
        const cookie = req.cookies
        const { token } = cookie
``
        const decoded = jwt.verify(token, 'oneD19@1989')

        const user = await UserModel.findById(decoded._id)

        if (!user) {
            throw new Error('Please Login !!!')
        }

        req.user = user

        next()

    } catch (err) {
        res.status(403).send('ERROR: ' + err.message)
    }

    next()
}


module.exports = {
    userAuth
}