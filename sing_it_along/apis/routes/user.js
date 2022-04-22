const express = require('express')
const { UserModel } = require('../database/schemas/user')

//=========================================================================================
const router = express.Router()

router.get('/', (req, res) => {
    res.send('WELCOME TO THE HOME PAGE')
})
router.post('/register', async (req, res) => {
    const userObject = req.body;      //req.body will be an object
    const createdUser = await UserModel.create(userObject);
    if (createdUser) res.json({ message: 'Registered successfully' })
    else res.json({ message: 'Cannot Register' })
})

router.post('/login', async (req, res) => {
    const userObject = req.body;      //req.body will NOT BE JSON,, "it will BE AN OBJECT" due to express.json() used in middleware
    const foundUser = await UserModel.findOne({ username: userObject.username })
    if (foundUser != null && foundUser.password === userObject.password) {
        if (foundUser.isAdmin === 'false') {
            console.log("server ", foundUser)
            res.json({ message: `Welcome ${foundUser.username}`, user : foundUser }) //converts the object into JSON string, then sends response in JSON to frontend
        }
        else{
            res.json({message : `Welcome ${foundUser.username} [ADMIN]`, user : foundUser})
        }
        
    }
    else {
        res.json({ message: `Incorrect username or password` })
    }
})
router.post('/:username/addsong', async(req, res)=>{
    const songObject  = req.body;
    const {username} = req.params;
    const updatedUser = await  UserModel.updateOne({username : username}, {$push : {playlist : songObject}}, {new : true})
    const newUser = await UserModel.findOne({username : username});
    res.json(newUser)

})
router.post('/:username/delSong', async(req, res)=>{
    const songObject = req.body;
    const {username} = req.params;
    const updatedUser = await UserModel.updateOne({username : username}, {$pull : {playlist : {name : songObject.name}}} , {new : true});
    const newUser = await UserModel.findOne({username : username});
    res.json(newUser)


})
router.get('/:name', async(req, res)=>{
    const {name} = req.params;
    const foundUser = await UserModel.findOne({username : name});
    res.json(foundUser)

})
//===========================================================================================
module.exports = { router }