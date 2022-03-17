import {
  RECEIVE_VIDEO_FEEDBACKS,
  REMOVE_VIDEO_FEEDBACK,
  RECEIVE_VIDEO_FEEDBACK
} from '../actions/feedback_actions';

const FeedbacksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_VIDEO_FEEDBACKS:
      newState = Object.assign(newState, action.feedbacks.data );
      return newState;
    case RECEIVE_VIDEO_FEEDBACK:
      if (newState === {}) {
        newState = Object.assign(newState, { 0: action.feedback.data });
      } else {
        const newKey = Object.keys(newState).length;
        newState = Object.assign(newState, { [newKey]: action.feedback.data });
      }
      return newState;
    case REMOVE_VIDEO_FEEDBACK:
      let toDelete
      Object.keys(newState).forEach(key => {
        if (newState[key]._id === action.feedbackId.data._id) {
          toDelete = key
        }
      })
      if (toDelete !== undefined) delete newState[toDelete];
      return newState;
    default:
      return state;
  }
};

export default FeedbacksReducer;