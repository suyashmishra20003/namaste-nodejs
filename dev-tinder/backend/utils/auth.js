const adminAuth = (req, res, next) => {
    const token = 'xyz'
    const isAuthorized = token === 'xyz'

    
    if(!isAuthorized){
        res.status(400).send('Admin is not Authorized')
    } else{
        console.log('Admin is Authorized')
        next()
    }


}

const userAuth = (req, res, next) => {
    const token = 'xyz'
    const isAuthorized = token === 'xyz'

    
    if(!isAuthorized){
        res.status(400).send('User is not Authorized')
    } else{
        console.log('User is Authorized')
        next()
    }


}


module.exports = {
    adminAuth,
    userAuth
}