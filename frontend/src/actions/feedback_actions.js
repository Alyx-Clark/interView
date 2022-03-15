import {
  getVideoFeedbacks
} from '../util/feedback_api_util';

export const RECEIVE_VIDEO_FEEDBACKS = "RECEIVE_VIDEO_FEEDBACKS";

export const receiveVideoFeedbacks = feedbacks => ({
  type: RECEIVE_VIDEO_FEEDBACKS,
  feedbacks
});


export const fetchVideoFeedbacks = videoId => dispatch => (
  getVideoFeedbacks(videoId)
    .then(feedbacks => dispatch(receiveVideoFeedbacks(feedbacks)))
    .catch(err => console.log(err))
);
