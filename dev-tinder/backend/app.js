const express = require("express")
const cookieParser = require('cookie-parser')
const app = express()
const connectDB = require('./database')
const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require("./routes/request")


app.use(express.json())
app.use(cookieParser())


app.use('/',authRouter)
app.use('/',profileRouter)
app.use('/',requestRouter)






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









