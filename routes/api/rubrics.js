const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Rubric = require('../../models/Rubric');
const validateRubricInput = require('../../validations/rubrics')

// create rubric

router.post('/new',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRubricInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newRubric = new Rubric({
      user: req.body.user,
      video: req.body.video,
      professionalism: req.body.professionalism,
      confidence: req.body.confidence,
      content: req.body.content,
      voice: req.body.voice
    });

    newRubric.save().then(rubric => res.json(rubric));
  }
);

// update rubric

router.patch('/edit/:id',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    Rubric.findById(req.params.id)
      .then(rubric => {
        rubric.user = req.body.user
        rubric.video = req.body.video
        rubric.professionalism = req.body.professionalism
        rubric.confidence = req.body.confidence
        rubric.content = req.body.content
        rubric.voice = req.body.voice

        rubric.save().then((rubric) => res.json(rubric));
      })
      .catch(err =>
        res.status(404).json({ novideofound: 'No rubric found with that ID' })
      );
  }
);

// delete rubric

router.delete('/delete/:id',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    Rubric.findByIdAndDelete(req.params.id)
      .then(rubric => res.json(rubric))
      .catch(err =>
        res.status(404).json({ norubricfound: 'No rubric found with that ID' })
      );
  }
);

// get all rubrics from a user
router.get('/user/:user_id', (req, res) => {
  // res.json({ msg: "This is the user show page" });
  Rubric.find({ user: req.params.user_id })
    .then(videos => res.json(videos))
    .catch(err =>
      res.status(404).json({ novideosfound: 'No videos found from that user' }
      )
    );
});

module.exports = router;