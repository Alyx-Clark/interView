const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Feedback = require('../../models/Feedback');
const validateFeedbackInput = require('../../validations/feedbacks')

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFeedbackInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newFeedback = new Feedback({
      user: req.user.id,
      video: req.video.id,
      positive: req.body.positive,
      negative: req.body.negative,
    });

    newFeedback.save().then(feedback => res.json(feedback));
  }
);

module.exports = router;