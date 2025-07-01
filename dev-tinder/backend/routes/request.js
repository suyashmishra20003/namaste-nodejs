const express = require('express');
const { userAuth } = require('../middlewares/userAuth');
const requestRouter = express.Router();

//todo connection request API
requestRouter.get('/connectionRequest',userAuth , async (req, res, next) => {
    try {
        return res.send(`Connection Request from ${req.user.firstName} ${req.user.lastName}`)
    } catch (err) {
        return res.status(403).send('ERROR : ' + err.message)
    }
})

module.exports = requestRouter