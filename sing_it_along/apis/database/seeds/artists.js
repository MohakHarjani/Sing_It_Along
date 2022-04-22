const {artistModel} = require('../schemas/artist')
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true,  useUnifiedTopology: true})
.then(()=>{console.log('CONNECTED TO DATABASE :)')})
.catch(()=>{console.log('CONNECTION TO DATABASE FAILED :(')})

artistModel.insertMany(
    [{
        name: "Sonu Nigam",
        url: "https://i.pinimg.com/236x/e5/de/f5/e5def55ff288d58e3c261b4ed4ee1218.jpg"
    },
    {
        name: "Shaan",
        url: "https://chiloka.com/i/i/s/h/a/shaan-10.jpg"
    },
    {
        name: "Neha Kakkar",
        url: "https://drytickets.com.au/assets/upload/750/450/60/celebrities/266-neha-kakkar.jpg"
    },
    {
        name: "Arijit Singh",
        url: "https://www.aajabhi.com/wp-content/uploads/2020/04/Arijit-Singh.jpg"
    },
    {
        name: "Sunidhi Chauhan",
        url: "https://www.filmibeat.com/img/popcorn/profile_photos/sunidhi-chauhan-20130814103926-124.jpg"
    },
    {
        name: "Daler Mehndi",
        url: "https://indianewengland.com/wp-content/uploads/2017/12/Daler-Mehndi.jpg"
    },
    {
        name: "Honey Singh",
        url: "https://sites.google.com/site/superhdwallpaperz/yo-yo-honey-singh/Yo%20Yo%20Honey%20Singh-fashion-url.jpg"
    },
    {
        name: "Badshah",
        url: "https://www.thenorthlines.com/wp-content/uploads/2019/07/Badshah.jpg"
    },
    {
        name: "Diljit Dosanjh",
        url: "https://st1.bollywoodlife.com/wp-content/uploads/2016/05/diljit-dosanjh.jpg"
    }
])
