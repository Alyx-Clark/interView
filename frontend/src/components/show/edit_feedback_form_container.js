import { connect } from 'react-redux';
import { editVideoFeedback } from "../../actions/feedback_actions";
import FeedbackForm from "./feedback_form";
import { open, close } from '../../actions/modal_actions'; 

const mapStateToProps = (state, ownProps) => {
  let positiveEdit
  let negativeEdit
  Object.keys(state.entities.feedbacks).forEach(key => {
    if (state.entities.feedbacks[key]._id === ownProps.match.params.feedbackId) {
      positiveEdit = state.entities.feedbacks[key].positive
      negativeEdit = state.entities.feedbacks[key].negative
    }
  })
  return {
    feedback: {
      userId: state.session.user.id,
      userFullName: state.session.user.fullname,
      video: ownProps.videoId,
      positive: positiveEdit,
      negative: negativeEdit,
      feedbackId: ownProps.match.params.feedbackId
    }
  }
};

const mapDispatchToProps = dispatch => ({
  action: feedback => dispatch(editVideoFeedback(feedback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);