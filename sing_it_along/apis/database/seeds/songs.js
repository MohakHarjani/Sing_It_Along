const {songModel}  = require('../schemas/song')
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true,  useUnifiedTopology: true})
.then(()=>{console.log('CONNECTED TO DATABASE :)')})
.catch((err)=>{console.log('CONNECTION TO DATABASE FAILED :(', err)})

songModel.insertMany([
    {
        name : 'Abhi Mujh Mei Kahin',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d4/06/39/d4063988-a5c8-974e-059b-5233110a322c/mzaf_2253161526891008132.plus.aac.p.m4a',
        artistName : 'Sonu Nigam',
        imgUrl : 'https://m.media-amazon.com/images/I/81OV48b+lYL._SS500_.jpg',
        description : 'Abhi Mujh Mein Kahin is a song from the movie Agneepath, sung by Sonu Nigam, with music by Ajay-Atul and lyrics by Amitabh Bhattacharya and was picturized on Hrithik Roshan and Priyanka Chopra. This song describes many feelings in a single line. It describes the short life of love too.'

    },
    {
        name : 'Kal Ho Naa Ho',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9e/f0/3c/9ef03c6e-b54b-59a5-18cd-6dcb6ca1f58f/mzaf_1390042420545718844.plus.aac.p.m4a',
        artistName : 'Sonu Nigam',
        imgUrl : 'https://www.mapsofindia.com/ci-moi-images/my-india/2019/11/movie-kal-ho-na-ho.jpg',
        description : 'Kal Ho Naa Ho  is a 2003 Hindi-language filmi song performed by Sonu Nigam for the 2003 Indian romantic drama film of the same name. The track was composed by Shankar–Ehsaan–Loy, while lyrics were written by Javed Akhtar.'

    },
    {
        name : 'Suraj Hua Maddham',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/49/01/22/490122b9-96fb-8f71-ae17-97a173e5cc9e/mzaf_6358738564088042084.plus.aac.p.m4a',
        artistName : 'Sonu Nigam',
        imgUrl : 'https://i1.sndcdn.com/artworks-000018171894-dwvf5o-t500x500.jpg',
        description : 'Suraj Hua Maddham is the hindi romantic song from the movie, Kabhi Khushi Kabhie Gham. This song is sung by Sonu Nigam & Alka Yagnik. It is composed by Sandesh Shandilya and written by Anil Pandey. It is picturised on Shah Rukh Khan & Kajol.'


    },
    {
        name : 'Bole Chudiyan',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/01/6a/c3/016ac3d9-23f5-e516-aa83-39b588e935ef/mzaf_13481623370811171542.plus.aac.p.m4a',
        artistName : 'Sonu Nigam',
        imgUrl : 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/14/924903-bolechudiyan-indonesia.jpg',
        description : 'Bole Chudiyan is a hindi song from the 2001 movie Kabhi Khushi Kabhie Gham. Bole Chudiyan features Amitabh Bachchan, Jaya Bachchan, Shahrukh Khan, Kajol, Hrithik Roshan, Kareena Kapoor'

    },
    {
        name : 'Shukran Allah',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/49/2d/9f/492d9fa7-de79-d14a-b8fe-b2d96b406c4d/mzaf_14681474525669718287.plus.aac.p.m4a',
        artistName : 'Sonu Nigam',
        imgUrl : 'https://i1.sndcdn.com/artworks-000083017724-fnakpr-t500x500.jpg',
        description : ' Shukran Allah is a Hindi language song and is sung by Sonu Nigam, Shreya Ghoshal, and Salim Merchant. This is a song from movie Kurbaan'

    },
    {
        name : 'Apna Har Din',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e2/f9/4e/e2f94e2f-548d-a5ef-948c-edfe7b946567/mzaf_16642359493007051230.plus.aac.p.m4a',
        artistName : 'Shaan',
        imgUrl : 'https://s2.dmcdn.net/v/EkVYX1N4TFenhajYv/x480',
        description : 'Apna Har Din Aise Jiyo mp3 from Golmaal 3 (2010): The song is sung by Anushka Manchanda,Shaan and composed by Pritam Chakraborty while lyrics written by Rakesh Kumar (Kumaar).'

    },
    {
        name : 'Chand Sifarish',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c6/47/ea/c647ea74-c1cb-a120-a0a6-7ef2e5f6c8ca/mzaf_12542596607886814622.plus.aac.p.m4a',
        artistName : 'Shaan',
        imgUrl : 'https://i.ytimg.com/vi/nT-DPEMZvsU/maxresdefault.jpg',
        description : 'Chand Sifarish Song from the Fanaa album is voiced by famous singer Shaan, Kailash Kher.'

    },
    {
        name : 'Bum Bum Bole',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/83/6a/fd/836afda8-75bc-d9cb-23fe-f21f545b147f/mzaf_10617165567991653552.plus.aac.p.m4a',
        artistName : 'Shaan',
        imgUrl : 'http://www.radioandmusic.com/sites/www.radioandmusic.com/files/images/entertainment/2015/11/14/Image-%281%29.jpg',
        description : 'Bum Bum Bole Song from the Taare Zameen Par album is voiced by famous singer Shaan, Aamir Khan.'
    },
    {
        name : 'Meri Duniya Tu Hi Re',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/91/85/58/9185587c-789d-0e5e-8a90-a3f0cb8cfb04/mzaf_301970236667294167.plus.aac.p.m4a',
        artistName : 'Shaan',
        imgUrl : 'https://c-cl.cdn.smule.com/rs-s83/arr/da/09/519f548f-9828-4dad-8518-ddd72cbb1532_1024.jpg',
        description : 'Meri Duniya Tu Hi Re Song from the Heyy Babyy album is voiced by famous singer Sonu Nigam, Shaan, Shankar Mahadevan'
    },
    {
        name : 'Tu Hi Yaar Mera',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/be/a2/a9/bea2a92e-897d-ed38-df94-cdf39a6e78dd/mzaf_12063379045192518785.plus.aac.p.m4a',
        artistName : 'Neha Kakkar',
        imgUrl : 'https://a10.gaanacdn.com/gn_img/song/mGjKr1b6zX/jKrmE8VJb6/size_xxl_1575343168.webp',
        description : 'Tu Hi Yaar Mera song is a very mellow song that will surely hook you up to its euphonious tunes. This song is from the movie Pati Patni Aur Woh'
    },
    {
        name : 'Mile Ho Tum',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a5/e1/b4/a5e1b4a1-098c-6f6e-7f3e-3ee185c98e94/mzaf_1858394255523188022.plus.aac.p.m4a',
        artistName : 'Neha Kakkar',
        imgUrl : 'https://i1.sndcdn.com/artworks-000175169877-a34eaf-t500x500.jpg',
        description : 'Mile Ho Tum (Reprise) song by Neha Kakkar, Tony Kakkar'
    },
    {
        name : 'Ankh Mare',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/e6/e1/39/e6e13933-af1d-0152-35e3-34e4fbe3379c/mzaf_15560983792098660707.plus.aac.p.m4a',
        artistName : 'Neha Kakkar',
        imgUrl : 'https://i.ytimg.com/vi/H1-RSRXmdpo/maxresdefault.jpg',
        description : 'Aankh Marey Song from the Simmba album is voiced by famous singer Neha Kakkar, Mika Singh, Kumar Sanu.'
    },
    {
        name : 'Taaron Ke Shehar',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/3c/6c/ff/3c6cff09-5cec-8c56-50b3-d51c76f81b6c/mzaf_1287606717602899736.plus.aac.p.m4a',
        artistName : 'Neha Kakkar',
        imgUrl : 'https://c.ndtvimg.com/2020-09/71488dr8_t-series_625x300_24_September_20.jpg',
        description : 'Taaron Ke Shehar Song from the Taaron Ke Shehar album is voiced by famous singer Neha Kakkar, Jubin Nautiyal, Jaani. '
    },
    {
        name : 'Channa Mereya',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f0/ef/16/f0ef16e5-5d5f-5b2f-8d41-1c9555f3e5e0/mzaf_5382880875564458911.plus.aac.p.m4a',
        artistName : 'Arijit Singh',
        imgUrl : 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/09/30/506233-ranbir-channa-mereya-ae-dil-adhm.jpg',
        description : 'Channa Mereya Song from the Ae Dil Hai Mushkil album is voiced by famous singer Pritam, Arijit Singh.'
    },
    {
        name : 'Pachtaoge',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/be/d4/a2/bed4a282-893f-99a4-b9bd-26ab9ffa2ca2/mzaf_6122088848220002326.plus.aac.p.m4a',
        artistName : 'Arijit Singh',
        imgUrl : 'https://english.cdn.zeenews.com/sites/default/files/2019/08/17/811998-pachtaoge.jpg',
        description : 'Pachtaoge is a 2019 Punjabi song, sung by Arijit Singh. The song is composed and lyrics are written by Jaani.'
    },
    {
        name : 'Sanam Re',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0d/a1/9a/0da19a1a-45aa-a0ba-1021-36a551e9f8e8/mzaf_16698829604623581353.plus.aac.p.m4a',
        artistName : 'Arijit Singh',
        imgUrl : 'https://a10.gaanacdn.com/gn_img/albums/z8k3yd1Krx/8k3y9BE53r/size_xxl.webp',
        description : 'Sanam Re is a Hindi language song and is sung by Arijit Singh and Mithoon.'
    },
    {
        name : 'Tujhe Kitna Chahne Lage Hum',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/15/2f/0c/152f0c75-e6c6-ef12-93a5-3bf9f3f9d4f5/mzaf_18085250159183899221.plus.aac.p.m4a',
        artistName : 'Arijit Singh',
        imgUrl : 'https://i.ytimg.com/vi/Hq5OTJdBKQU/maxresdefault.jpg',
        description : 'Tujhe kitna chahne lage song is from the movie Kabir Singh, a Hindi-language romantic drama film starring Shahid Kapoor and Kiara Advani in the lead roles.'
    },
    {
        name : 'Dhoom Machale',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f5/be/26/f5be26cf-e93c-d96f-7519-c7c74d24fd21/mzaf_4605867809970868343.plus.aac.p.m4a',
        artistName : 'Sunidhi Chauhan',
        imgUrl : 'http://a10.gaanacdn.com/images/albums/52/71352/crop_480x480_71352.jpg?version=1',
        description : ' Dhoom Machale is a Hindi language song and is sung by Sunidhi Chauhan, Pritam, and Sameer.'
    },
    {
        name : 'Kamli',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0f/f4/58/0ff45879-b801-e84a-f5b7-21219c6aa185/mzaf_16631363393095544609.plus.aac.p.m4a',
        artistName : 'Sunidhi Chauhan',
        imgUrl : 'https://i.ytimg.com/vi/5owMT7ZKxCI/maxresdefault.jpg',
        description : ' Kamli is a Hindi language song and is sung by Sunidhi Chauhan and Amitabh Bhattacharya.'
    },
    {
        name : 'Hey Shona',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/57/ac/69/57ac6925-f6de-507e-503b-b9585e573dc5/mzaf_11062046724943694521.plus.aac.p.m4a',
        artistName : 'Sunidhi Chauhan',
        imgUrl : 'https://i1.wp.com/newsongslyrics.net/wp-content/uploads/2018/10/Hey-Shona-Song-Lyrics.jpg?resize=543%2C350',
        description : 'Hey Shona Song from the Ta Ra Rum Pum album is voiced by famous singer Vishal-Shekhar, Shaan, Sunidhi Chauhan, Javed Akhtar'
    },
    {
        name : 'Lae Dooba',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/03/64/7d/03647dd0-f45b-89a1-1502-c99181ce11a7/mzaf_17958337077264055591.plus.aac.p.m4a',
        artistName : 'Sunidhi Chauhan',
        imgUrl : 'https://i.ytimg.com/vi/lTvrdaYBrXk/maxresdefault.jpg',
        description : 'Lae Dooba is a Hindi language song and is sung by Sunidhi Chauhan. '
    },
    {
        name : 'Tunak Tunak Tun',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/ff/a7/5affa7d8-c4bb-4530-c4cd-1a043cdb1ec0/mzaf_15053694872004469718.plus.aac.p.m4a',
        artistName : 'Daler Mehndi',
        imgUrl : 'https://s4.scoopwhoop.com/anj/daler/936386286.png',
        description : 'Tunak Tunak Tun is a Punjabi language song and is sung by Daler Mehndi.'
    },
    {
        name : 'Zor Ka Jhatka',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cf/de/f3/cfdef3ce-f554-ddd1-bfb7-a1de63faff2b/mzaf_12601436940146840233.plus.aac.p.m4a',
        artistName : 'Daler Mehndi',
        imgUrl : 'https://i.ytimg.com/vi/NyDVBP_9k-E/hqdefault.jpg',
        description : 'Zor Ka Jhatka Song from the Action Replayy album is voiced by famous singer Pritam, Daler Mehndi, Richa Sharma.'
    },
    {
        name : 'Jiyo Re Bahubali',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f4/56/c4/f456c413-be85-0efd-59fc-11742007443d/mzaf_11616795183995171308.plus.aac.p.m4a',
        artistName : 'Daler Mehndi',
        imgUrl : 'https://english.cdn.zeenews.com/sites/default/files/2017/04/23/588793-baahubali-song.jpg',
        description : 'Jiyo Re Bahubali is a Hindi language song and is sung by Daler Mehndi, Sanjeev Chimmalgi, and Ramya Behara.'
    },
    {
        name : 'Paagal',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4e/70/7c/4e707c1b-7095-bda8-6b36-3b44c911291c/mzaf_4309452795064766567.plus.aac.p.m4a',
        artistName : 'Badshah',
        imgUrl : 'http://a10.gaanacdn.com/images/albums/12/2709012/crop_480x480_2709012.jpg',
        description : 'The rapper-songwriter Badshah has himself  sung, composed and written the song.'
    },
    {
        name : 'DJ Wale Babu',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/90/68/f5/9068f53d-ac4c-604d-a1ea-b58681e56f0a/mzaf_13681920094640968895.plus.aac.p.m4a',
        artistName : 'Badshah',
        imgUrl : 'https://resize.indiatvnews.com/en/resize/oldbucket/715_-/entertainmentbollywood/IndiaTvb5b36b_DJ-Waley-Babu.jpg',
        description : 'The rapper-songwriter Badshah has himself  sung, composed and written the song.'
    },
    {
        name : 'Selfie Le Le Re',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6c/52/2b/6c522bed-fb7a-d5a0-c7d1-ed7a37fbfeb1/mzaf_14729328798116992401.plus.aac.p.m4a',
        artistName : 'Badshah',
        imgUrl : 'https://www.makemykaraoke.com/images/detailed/37/Bajrangi-Bhaijaan-Selfie-Le-Le-Re.jpg',
        description : 'Selfie Le Le Re is a song by Pritam from the movie Bajrangi Bhaijaan.'
    },

    {
        name : 'Sardaar Ji',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/01/d1/80/01d18095-19a0-1fea-8b1e-32b829a541cd/mzaf_8277533693043981034.plus.aac.p.m4a',
        artistName : 'Diljit Dosanjh',
        imgUrl : 'https://s1.dmcdn.net/v/DPzz01MknJaMMuo0L/x1080',
        description : 'Sardar Ji song by Diljit Dosanjh, is a popular punjabi song'
    },
    {
        name : 'Dil Todeya',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cc/2e/17/cc2e1716-064f-e5c8-4021-6b03caf424ee/mzaf_8649495484353183529.plus.aac.p.m4a',
        artistName : 'Diljit Dosanjh',
        imgUrl : 'https://i.ytimg.com/vi/0NxId5wOxrU/maxresdefault.jpg',
        description : 'Dil Todeya song by Diljit Dosanjh from movie Arjun Patiala'
    },
    {
        name : 'Desi Daaru',
        url : 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/06/45/2e/06452ec7-9027-979c-c5e1-85a0c5ef06b6/mzaf_2990631394771550447.plus.aac.p.m4a',
        artistName : 'Diljit Dosanjh',
        imgUrl : 'https://i.ytimg.com/vi/nUIqXdDgvyo/maxresdefault.jpg',
        description : 'Desi Daaru song is a latest Punjabi party song by Diljit Doshanjh'
    }])
