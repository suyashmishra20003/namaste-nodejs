const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    emailId: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;