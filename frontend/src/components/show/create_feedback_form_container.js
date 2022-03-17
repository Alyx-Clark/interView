import { connect } from 'react-redux';
import { createNewVideoFeedback } from "../../actions/feedback_actions";
import FeedbackForm from "./feedback_form";

const mapStateToProps = state => {
  return {
    feedback: {
      userId: state.session.user.id,
      userFullName: state.session.user.fullname,
      video: '622fee0353e5b6c175fd7611',
      positive: '',
      negative: '',
    },
    formType: 'Create Feedback'
  }
};

const mapDispatchToProps = dispatch => ({
  action: feedback => dispatch(createNewVideoFeedback(feedback))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
