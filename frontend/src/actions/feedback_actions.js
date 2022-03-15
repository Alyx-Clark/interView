import {
  getVideoFeedbacks,
  deleteVideoFeedback
} from '../util/feedback_api_util';


export const RECEIVE_VIDEO_FEEDBACKS = "RECEIVE_VIDEO_FEEDBACKS";
export const REMOVE_VIDEO_FEEDBACK = "REMOVE_VIDEO_FEEDBACK";

export const receiveVideoFeedbacks = feedbacks => ({
  type: RECEIVE_VIDEO_FEEDBACKS,
  feedbacks
});

export const removeVideoFeedback = feedbackId => ({
  type: REMOVE_VIDEO_FEEDBACK,
  feedbackId
})


export const fetchVideoFeedbacks = videoId => dispatch => {
  return (
    getVideoFeedbacks(videoId)
      .then(feedbacks => dispatch(receiveVideoFeedbacks(feedbacks)))
      .catch(err => console.log(err))
  )
};

export const deleteVideoFeedbacks = feedbackId => dispatch => {
  return (
    deleteVideoFeedback(feedbackId)
      .then(feedbackId => dispatch(removeVideoFeedback(feedbackId)))
      .catch(err => console.log(err))
  )
};
