const validator = require('validator')

const validateSignUpApi = (req) => {
    const {firstName, lastName, emailId, password} = req.body
    const regex = /^[A-Za-z]+$/;

    if(!firstName || firstName.length < 2 || firstName.length > 50 || !regex.test(firstName)){
        throw(new Error('firstName is not valid'))
    }
    if(!lastName || lastName.length < 2 || lastName.length > 50 || !regex.test(lastName)){
        throw(new Error('lastName is not valid'))
    }

    if(!validator.isEmail(emailId)){
        throw(new Error('Email is not valid'))
    }

    if(!validator.isStrongPassword(password)){
        throw(new Error('Password is not strong'))
    }

}

module.exports = {
    validateSignUpApi
}