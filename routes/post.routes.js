const {Router} = require('express');

const HomePost = require('../models/HomePost');
const LostPost = require('../models/LostPost');
const FoundPost = require('../models/FoundPost');
const HotelPost = require('../models/HotelPost');
const WalkingPost = require('../models/WalkingPost');
const FosteringPost = require('../models/FosteringPost');
const VetHelpPost = require('../models/VetHelpPost');
const {validationResult} = require('express-validator');


const router = Router();
let subscribers = [];
const eventHeaders = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
};

function createNewPost(typePost, body) {
    switch (typePost) {
        case 'home':
            return new HomePost(body);
        case 'lost':
            return new LostPost(body);
        case 'found':
            return new FoundPost(body);
        case 'hotels':
            return new HotelPost(body);
        case 'walking':
            return new WalkingPost(body);
        case 'fostering':
            return new FosteringPost(body);
        case 'vethelp':
            return new VetHelpPost(body);
    }
}

async function addNewPost(req, res, typePost) {

    const body = req.body;
    body.time = Date.now();
    const post = createNewPost(typePost, body);
    console.log('Post', typePost, post)
    await post.save();
    sendEventsToAll(typePost);
    res.status(201).json({message: "Post added"})
}

function addSubscriber(req, res, next) {

    const subscriberId = Date.now();
    const newSubscriber = {
        id: subscriberId,
        res
    };
    subscribers.push(newSubscriber);
    console.log('newSubscriber added');

    req.on('close', () => {
        console.log(`${subscriberId} Connection closed`);
        subscribers = subscribers.filter(c => c.id !== subscriberId);
    });
}

function sendEventsToAll(postType) {

    const data = `data: ${JSON.stringify(postType)}\n\n`;
    subscribers.forEach(c => {
        c.res.writeHeader(200, eventHeaders);
        c.res.write(data);
    })
}

router.get('/subscribe', [],
    async (req, res, next) => {
        addSubscriber(req, res, next);
    }
);

router.get('/home', [],
    async (req, res) => {
        try {
            HomePost.find({}, {}, {sort: {time: -1}})
                .exec((err, allPosts) => {
                    if (err) console.error(err);
                    res.json(allPosts);
                });
        } catch (e) {
            console.log('homePost.routes, getAll: ', e.message)
            res.status(500).json({message: e.message})
        }
    });

router.put('/home',
    [],
    async (req, res) => {
        await addNewPost(req, res, 'home')

    });

router.get('/lost',
    [],
    (req, res) => {
        try {
            LostPost.find({}, {}, {sort: {time: -1}})
                .exec((err, allPosts) => {
                    if (err) console.error(err);
                    res.json(allPosts);
                });
        } catch (e) {
            console.log('lostPost.routes, getAll: ', e.message)
            res.status(500).json({message: e.message})
        }
    });

router.put('/lost',
    [],
    async (req, res) => {
        const body = await req.body;
        body.time = Date.now();
        const post = new LostPost(body);
        await post.save();
        sendEventsToAll('lost');
        res.status(201).json({message: "Post added"})
    });

router.get('/found',
    [],
    (req, res) => {
        try {
            FoundPost.find({}, {}, {sort: {time: -1}})
                .exec((err, allPosts) => {
                    if (err) console.error(err);
                    res.json(allPosts);
                });
        } catch (e) {
            console.log('foundPost.routes, getAll: ', e.message)
            res.status(500).json({message: e.message})
        }
    });

router.put('/found',
    [],
    async (req, res) => {
        const body = await req.body;
        body.time = Date.now();
        const post = new FoundPost(body);
        await post.save();

        res.status(201).json({message: "Post added"})
    });

router.get('/hotels',
    [],
    (req, res) => {
        try {
            HotelPost.find({}, {}, {sort: {time: -1}})
                .exec((err, allPosts) => {
                    if (err) console.error(err);
                    res.json(allPosts);
                });
        } catch (e) {
            console.log('hotelPost.routes, getAll: ', e.message)
            res.status(500).json({message: e.message})
        }
    });

router.put('/hotels',
    [],
    async (req, res) => {
        const body = await req.body;
        body.time = Date.now();
        const post = new HotelPost(body);
        await post.save();

        res.status(201).json({message: "Post added"})
    });

router.get('/walking',
    [],
    (req, res) => {
        try {
            WalkingPost.find({}, {}, {sort: {time: -1}})
                .exec((err, allPosts) => {
                    if (err) console.error(err);
                    res.json(allPosts);
                });
        } catch (e) {
            console.log('walkingPost.routes, getAll: ', e.message)
            res.status(500).json({message: e.message})
        }
    });

router.put('/walking',
    [],
    async (req, res) => {
        const body = await req.body;
        body.time = Date.now();
        const post = new WalkingPost(body);
        await post.save();

        res.status(201).json({message: "Post added"})
    });

router.get('/fostering',
    [],
    (req, res) => {
        try {
            FosteringPost.find({}, {}, {sort: {time: -1}})
                .exec((err, allPosts) => {
                    if (err) console.error(err);
                    res.json(allPosts);
                });
        } catch (e) {
            console.log('fosteringPost.routes, getAll: ', e.message)
            res.status(500).json({message: e.message})
        }
    });

router.put('/fostering',
    [],
    async (req, res) => {
        const body = await req.body;
        body.time = Date.now();
        const post = new FosteringPost(body);
        await post.save();

        res.status(201).json({message: "Post added"})
    });

router.get('/vethelp',
    [],
    (req, res) => {
        try {
            VetHelpPost.find({}, {}, {sort: {time: -1}})
                .exec((err, allPosts) => {
                    if (err) console.error(err);
                    res.json(allPosts);
                });
        } catch (e) {
            console.log('vetHelpPost.routes, getAll: ', e.message)
            res.status(500).json({message: e.message})
        }
    });

router.put('/vethelp',
    [],
    async (req, res) => {
        const body = await req.body;
        body.time = Date.now();
        const post = new VetHelpPost(body);
        await post.save();

        res.status(201).json({message: "Post added"})
    });

module.exports = router;
