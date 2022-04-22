const express = require('express')
const router = express.Router()
const {songModel} = require('../database/schemas/song')
//==================================================================================================

router.get('/all', async (req, res) => {    //route for showing all-songs
    const {order} = req.query;
    let allSongs = null;
    if (order == null){
        allSongs = await songModel.find();
    }
    else{
        allSongs = (order == 'asc')? await songModel.find().sort({name : 1}) : await songModel.find().sort({name : -1})
    }
    res.json( allSongs )
})
router.post('/add', async (req, res) => {
    const songObject = req.body;
    const addedSong = await songModel.create(songObject)
    res.json({ message: 'Song successfully added' })
})
router.get('/', async (req, res) => {
    const { artist } = req.query;
    const artistSongs = await songModel.find({ artistName: artist })
    res.json(artistSongs)
})
router.get('/:name', async(req, res)=>{
    const {name} = req.params;
    const foundSong = await songModel.findOne({name : name})
    res.json(foundSong)
})
router.get('/delete/:name', async(req, res)=>{
    const {name} = req.params;
    const foundSong = await songModel.deleteOne({name : name})
    res.json({message : 'Song deleted successfully'})
})

//========================================================================================================
module.exports = { router }