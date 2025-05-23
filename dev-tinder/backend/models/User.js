const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    age: {
        type: Number,
        min: 18,
        max: 105
    },
    emailId: {
        type: String,
        lowercase: true,
        unique: true,
        trime:true,
        required:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email!! Enter a valid one')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error('Invalid Password!! Enter a valid one')
            }
        }

    },
    gender: {
        type: String,
        required: true,
        validate(value) {
            if (!['male', 'female', 'other'].includes(value)) {
                throw new Error('Invalid Gender')
            }
        }
    },
    photoUrl: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error('Invalid URL!! Enter a valid one')
            }
        }
    },
    about: {
        type: String,
        default: "This is a default about"
    },
    skills: {
        type: [String],
        default: ["HTML", "CSS", "JS"]
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;