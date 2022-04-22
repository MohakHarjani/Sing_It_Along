const express = require('express');
const {router : userRoutes} = require('./routes/user')
const {router : songRoutes} = require('./routes/songs')
const {router : artistRoutes} = require('./routes/artists')
const {artistModel} = require('./database/schemas/artist')
const {songModel} = require('./database/schemas/song')
const cors = require('cors');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

//==================================================================================================================================
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());  //we cannot by default access req.body in our routes, using this we can access
                        //this parses req.body which is JSON and returns an OBJECT....ultimately req.body will now contain body as an OBJECT 

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true,  useUnifiedTopology: true})
.then(()=>{console.log('CONNECTED TO DATABASE :)')})
.catch((err)=>{console.log('CONNECTION TO DATABASE FAILED :(', err)})

//=======================================================================================================================================

app.use('/user', userRoutes)
app.use('/songs', songRoutes)
app.use('/artists', artistRoutes)

//===============================================================================================================================

app.listen(4000, ()=>{
    console.log('SERVER STARTED  at port : 4000!!')
})