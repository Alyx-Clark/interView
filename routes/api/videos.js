const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Video = require('../../models/Video');
const validateVideoInput = require('../../validations/video');

const Feedback = require('../../models/Feedback');
const validateFeedbackInput = require('../../validations/feedbacks');


router.get("/test", (req, res) => res.json({ msg: "This is the videos route" }));

router.get('/', (req, res) => {
    // res.json({ msg: "This is the videos index page" });
    Video.find()
        .then(videos => res.json(videos))
        .catch(err => res.status(404).json({ novideosfound: 'No videos found' }));
});

router.get('/user/:user_id', (req, res) => {
    // res.json({ msg: "This is the user show page" });
    Video.find({ user: req.params.user_id })
        .then(videos => res.json(videos))
        .catch(err =>
            res.status(404).json({ novideosfound: 'No videos found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    // res.json({ msg: "This is the video show page" });
    Video.findById(req.params.id)
        .then(video => res.json(video))
        .catch(err =>
            res.status(404).json({ novideofound: 'No video found with that ID' })
        );
});

// get feedbacks

router.get('/feedbacks/:id', (req, res) => {
    // res.json({ msg: "This is the feedback for that video" });
    Feedback.find({ video: req.params.id })
        .then(feedback => res.json(feedback))
        .catch(err =>
            res.status(404).json({ nofeedbackfound: 'No video found with that ID' })
        );
});


router.get('/:id/rubric', (req, res) => {
    res.json({ msg: "This is the rubric for that video" });
    // Video.findById(req.params.id)
    //     .then(video => res.json(video))
    //     .catch(err =>
    //         res.status(404).json({ novideofound: 'No video found with that ID' })
    //     );
});


// create video

router.post('/user/:user_id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateVideoInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newVideo = new Video({
            user: req.body.user,
            // video: req.body.video,
            question: req.body.question,
            experience: req.body.experience,
            industry: req.body.industry,
        });

        newVideo.save().then(video => res.json(video));
    }
);

// update video

router.patch('/user/:id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {

        Video.findById(req.params.id)
            .then(video => {
                video.user = req.body.user
                // video: req.body.video
                video.question = req.body.question
                video.experience = req.body.experience
                video.industry = req.body.industry

                video.save().then((video) => res.json(video));
            })
            .catch(err =>
                res.status(404).json({ novideofound: 'No video found with that ID' })
            );
    }
);

// delete video

router.delete('/user/:id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {

        Video.findByIdAndDelete(req.params.id)
            .then(video => res.json(video))
            .catch(err =>
                res.status(404).json({ novideofound: 'No video found with that ID' })
            );
    }
);

module.exports = router;