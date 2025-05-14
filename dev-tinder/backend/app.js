const express = require("express")
const app = express()
const  connectDB  = require('./database')
const mongoose  = require("mongoose")
const UserModel = require("./models/User")


app.post('/signUp', async (req,res,next) => {

    const user = new UserModel({
        firstName:'Suyash',
        lastName:'Mishra',
        age:28,
        emailId:'suyash@mishra.com',
        password:'Suyash@123'
    }) 

    try {
        await user.save()
        res.send('User Sign Up successful !!')
    } catch (err) {
        res.status(403).send('User saving failed')
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









//* Wildcard route that logs errors
// app.use('/', (err, req, res, next) => {
//     console.log('Error middleware executed')
//     if (err) {
//         console.log(err)
//         res.status(400).send('Error Occured')
//     }
// })


//* Authentication and Authorization

// app.use('/admin', adminAuth)


// app.use('/user/addUser', userAuth, (req, res, next) => {
//     // throw(new Error('Error Occured'))
//     res.send('User Added')
// })

// app.use('/user/login', (req, res, next) => {
//     res.send('User Logged In !!!')
// })


// app.use('/admin/addAdmin', (req, res, next) => {
//     res.send('Admin Added')
// })

// app.use('/admin/deleteAdmin', (req, res, next) => {
//     res.send('Admin Deleted')
// })



// app.get("/test", (req, res) => {
//     res.send('Test route working')
// })
// app.get("/hello/2", (req, res) => {
//     res.send('AbraCaDabra !!!!!')
// })

// app.get("/hello", (req, res) => {
//     res.send('hello route working')
// })


// both calls are different but the route is same
// app.get("/user", (req, res) => {
//     res.send({
//         name: "Suyash",
//         age: 20
//     })
// })

// app.post("/user", (req, res) => {
//     res.send({
//         name: "Suyash",
//         age: 20
//     })
// })



//* Route params and Query params

// app.get('/userParam/:userId', (req, res) => {
//     const queryParams = req.query;
//     const routeParams = req.params;

//     console.log(' Params *****')
//     console.log(queryParams, routeParams)

//     res.send('userParam route working')

// })

// This works
// app.use('/uerquery', [
//     (req, res, next) => {
//         console.log(`userquery route's 1st middleware`)
//         // res.send("userquery route's 1st middleware")
//         next()
//     },
//     (req, res, next) => {
//         console.log(`userquery route's 2nd middleware`)
//         // res.send("userquery route's 2nd middleware")
//         next()
//     },
//     (req, res, next) => {
//         console.log(`userquery route's 3rd middleware`)
//         // res.send("userquery route's 3rd middleware")
//         next()
//     },
//     (req, res, next) => {
//         console.log(`userquery route's 4th middleware`)
//         res.send("userquery route's 4th middleware")
//         next()
//     }

// ])

// This also works. same output with diff syntax
// app.use('/uerquery', (req, res, next) => {
//     console.log(`userquery route's 1st middleware`)
//     // res.send("userquery route's 1st middleware")
//     next()
// })
// app.use('/uerquery', (req, res, next) => {
//     console.log(`userquery route's 2nd middleware`)
//     // res.send("userquery route's 2nd middleware")
//     next()
// })
// app.use('/uerquery', (req, res, next) => {
//     console.log(`userquery route's 3rd middleware`)
//     // res.send("userquery route's 3rd middleware")
//     next()
// })
// app.use('/uerquery', (req, res, next) => {
//     console.log(`userquery route's 4th middleware`)
//     res.send("userquery route's 4th middleware")
//     next()
// })

//* Wildcard route that logs errors
// app.use('/', (err, req, res, next) => {
//     console.log('Error middleware executed')
//     if (err) {
//         console.log(err)
//         res.status(403).send('Error Occured')
//     }
// })
