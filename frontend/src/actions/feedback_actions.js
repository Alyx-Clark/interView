import {
  getVideoFeedbacks,
  deleteVideoFeedback,
  createVideoFeedback,
  updateVideoFeedback
} from '../util/feedback_api_util';


export const RECEIVE_VIDEO_FEEDBACKS = "RECEIVE_VIDEO_FEEDBACKS";
export const RECEIVE_VIDEO_FEEDBACK = "RECEIVE_VIDEO_FEEDBACK";
export const EDIT_VIDEO_FEEDBACK = "EDIT_VIDEO_FEEDBACK";
export const REMOVE_VIDEO_FEEDBACK = "REMOVE_VIDEO_FEEDBACK";

export const receiveVideoFeedbacks = feedbacks => ({
  type: RECEIVE_VIDEO_FEEDBACKS,
  feedbacks
});

export const receiveVideoFeedback = feedback => ({
  type: RECEIVE_VIDEO_FEEDBACK,
  feedback
});

export const updateAVideoFeedback = feedback => ({
  type: EDIT_VIDEO_FEEDBACK,
  feedback
});

export const removeVideoFeedback = feedbackId => ({
  type: REMOVE_VIDEO_FEEDBACK,
  feedbackId
});


export const fetchVideoFeedbacks = videoId => dispatch => {
  return (
    getVideoFeedbacks(videoId)
      .then(feedbacks => dispatch(receiveVideoFeedbacks(feedbacks)))
      .catch(err => console.log(err))
  )
};

export const createNewVideoFeedback = feedback => dispatch => {
  return (
    createVideoFeedback(feedback)
      .then(feedback => dispatch(receiveVideoFeedback(feedback)))
      .catch(err => console.log(err))
  )
};

export const editVideoFeedback = feedback => dispatch => {
  return (
    updateVideoFeedback(feedback)
      .then(feedback => dispatch(updateAVideoFeedback(feedback)))
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
