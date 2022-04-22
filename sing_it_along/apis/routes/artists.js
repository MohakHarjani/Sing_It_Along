const express = require('express')
const router = express.Router();
const {artistModel} = require('../database/schemas/artist')
//==============================================================================================================
router.get('/all', async(req, res)=>{
    const allArtists = await artistModel.find();
    res.json(allArtists);
})
router.post('/add', async(req, res)=>{
    const artistObject = req.body;
    const addedArtist = await artistModel.create(artistObject);
    res.json({message : `Artist added successfully`})
})
//=========================================================================================================
module.exports = {router}