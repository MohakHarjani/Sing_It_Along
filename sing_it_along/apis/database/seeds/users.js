const {UserModel} = require('../schemas/user')
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true,  useUnifiedTopology: true})
.then(()=>{console.log('CONNECTED TO DATABASE :)')})
.catch(()=>{console.log('CONNECTION TO DATABASE FAILED :(')})

UserModel.insertOne({
    username : 'mohak',
    password : 'harjani1',
    email : 'mh2001harjani@gmail.com',
    isAdmin : 'true'
})
