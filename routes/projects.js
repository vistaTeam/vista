const router = require('express').Router();
let bodyParser = require('body-parser')
let Project = require('../models/projects.model');
const path = require('path')
const fs = require('fs')



router.route('/').get((req, res)=>{
    Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Eror' + err))
});



router.route('/add').post((req, res)=>{

    var tempImages = req.body.images;
    var images = [tempImages.split(' ')]

    var latest = false;
    if (req.body.latest == 'yes') {
        latest = true
    }

    var video = {video: false}
    if (req.body.video == 'yes') {
        var video = {video: true, imgVideo: req.body.imgVideo, videoId: req.body.videoId}
    }

     var obj = { 
        headerTitle: req.body.headerTitle, 
        headerSecondTitle: req.body.headerSecondTitle, 
        mainTitle: req.body.mainTitle, 
        category: req.body.category, 
        firstText: req.body.firstText,
        secondText: req.body.secondText,
        date: req.body.date,
        live: req.body.live,
        mainImage: req.body.mainImage,
        images: images[0],
        latest: latest,
        video: video
    } 

    const newProject = new Project(obj)
    newProject.save()
    .then(() => res.json('Great! Project added'), console.log('Good! Project added'))
    .catch(err => res.status(400).json('Eror' + err))
});


router.route('/:id').get((req, res, next)=>{
    Project.findById(req.params.id, (error, data) =>{
        if (error) {
            return next(error)
        }
        else{
            res.json(data)
            console.log(data);
        }
    })
 
})


    router.route('/findUser/:username').get((req, res, next)=>{
    User.find({username: req.params.username})
    .then((data)=> res.json(data),console.log('Log in good!'))
    .catch(err => res.status(400).json('eror ' + err))
})


router.route('/findEmail/:email').get((req, res, next)=>{
    User.find({email: req.params.email})
    .then((data)=> res.json(data),console.log('Email found'))
    .catch(err => res.status(400).json('eror ' + err))
})


router.route('/:id').delete((req, res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=> res.json('user deleted!!!'))
    .catch(err => res.status(400).json('eror ' + err))
})

router.route('/update/:id').post((req, res)=>{
    User.findById(req.params.id)

    .then( user => {
        user.username = req.body.username
        user.password = req.body.password
        user.email = req.body.email

        user.save()
        .then(()=> res.json('user updates!!!'))
        .catch(err => res.status(400).json('eror ' + err))
    })

    .catch(err => res.status(400).json('eror ' + err))
})




module.exports = router;
