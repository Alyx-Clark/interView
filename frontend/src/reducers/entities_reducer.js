import { combineReducers } from 'redux';

import feedbacks from './feedbacks_reducer';
import rubrics from './rubric_reducer';
import VideosReducer from './videos_reducer';

export default combineReducers({
  feedbacks,
  rubrics,
  videos: VideosReducer
});




