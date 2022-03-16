import { combineReducers } from 'redux';

import feedbacks from './feedbacks_reducer';
import rubrics from './rubric_reducer';

export default combineReducers({
  feedbacks,
  rubrics,
});
