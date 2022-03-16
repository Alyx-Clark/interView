import { connect } from 'react-redux';

import ShowFeedbacks from "./show_feedbacks";
import { fetchVideoFeedbacks, deleteVideoFeedbacks } from '../../actions/feedback_actions';

const mapStateToProps = (state) => {
  const feedbacks = state.entities.feedbacks
  const currentUser = state.session.user
  return {
    feedbacks,
    currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  fetchVideoFeedbacks: videoId => dispatch(fetchVideoFeedbacks(videoId)),
  deleteVideoFeedbacks: feedbackId => dispatch(deleteVideoFeedbacks(feedbackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFeedbacks);