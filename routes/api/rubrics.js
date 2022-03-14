const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Rubric = require('../../models/Rubric');
const validateRubricInput = require('../../validations/rubrics')

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRubricInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newRubric = new Rubric({
      user: req.user.id,
      video: req.video.id,
      professionalism: req.body.professionalism,
      confidence: req.body.confidence,
      content: req.body.content,
      voice: req.body.voice
    });

    newRubric.save().then(rubric => res.json(rubric));
  }
);

module.exports = router;