const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://suyashmishra20003:0191Ex131104@suyashcluster0.7mij7o1.mongodb.net/devTinder'
    )
}

module.exports = connectDB
