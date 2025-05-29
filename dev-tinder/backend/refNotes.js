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


//todo  Getting a single user
// app.get('/singleUser', async (req, res, next) => {
//     const userId = req.body.emailId
//     try {
//         const single = await UserModel.find({ emailId: userId })
//         res.send(single)
//     } catch (error) {
//         res.status(404).send('User Not Found')

//     }
// })

//todo  Getting all users
// app.get('/feed', async (req, res, next) => {
//     try {
//         const users = await UserModel.find({})
//         res.send(users)
//     } catch (error) {
//         res.status(404).send('Users not found')

//     }
// })

//todo Deleting a user

// app.delete('/user', async (req, res, next) => {
//     const userId = req.body._id
//     try {
//         await UserModel.deleteOne({ _id: userId })
//         res.send("User Deleted")
//     } catch (error) {
//         res.status(404).send('This user is not deleted')
//     }
// })

//todo Updating a user

// app.patch('/user/:userId', async (req, res, next) => {
//     const id = req.body._id;
//     const userId = req.params.userId
//     // const userId = req.body.userId

//     //? Using updateOne
//     try {

//         // Data sanitization : API level validations
//         const ALLOWED_UPDATES = ['gender', 'lastName', 'age', 'password', 'photoUrl', 'about', 'skills']
//         const isUpdateAllowed = Object.keys(req.body).every((key) => ALLOWED_UPDATES.includes(key))

//         if (!isUpdateAllowed) {
//             throw (new Error('Invalid Keys Detected'))
//         }

//         if (req.body.skills.length > 5) {
//             throw (new Error('Skills cannot be more than 5'))
//         }

//         await UserModel.updateOne(
//             { _id: userId },
//             { $set: req.body }, {
//             runValidators: true
//         }
//         )
//         res.send("User Updated")
//     } catch (error) {
//         res.status(400).send({
//             message: 'UPDATE FAILED!!',
//             error: error.message
//         });
//     }

    // ? Using findByIdAndUpdate
    // try {
    //     await UserModel.findByIdAndUpdate({_id:userId},req.body)
    //     res.send("User Updated")
    // } catch (error) {
    //     res.status(404).send('This user is not updated !!')
    // }

// })
