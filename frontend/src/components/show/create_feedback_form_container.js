import { connect } from 'react-redux';
import { createNewVideoFeedback } from "../../actions/feedback_actions";
import FeedbackForm from "./feedback_form";

const mapStateToProps = (state, ownProps) => {
  return {
    feedback: {
      userId: state.session.user.id,
      userFullName: state.session.user.fullname,
      video: ownProps.videoId,
      positive: '',
      negative: '',
      feedbackId: ''
    }
  }
};

const mapDispatchToProps = dispatch => ({
  action: feedback => dispatch(createNewVideoFeedback(feedback))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
