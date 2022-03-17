import { connect } from 'react-redux';

import RubricForm from "./show_rubric_form";
import { createRubric, fetchVideoRubrics } from '../../actions/rubric_actions';

const mapStateToProps = (state, ownProps) => {
    const videoId = ownProps.videoId
    const currentUser = state.session.user;
    return {
        videoId,
        currentUser
    };
};

const mapDispatchToProps = dispatch => ({
    createRubric: data => dispatch(createRubric(data)),
    fetchVideoRubrics: videoId => dispatch(fetchVideoRubrics(videoId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RubricForm);