import { connect } from 'react-redux';

import RubricForm from "./show_rubric_form";
import { createRubric } from '../../actions/rubric_actions';

const mapStateToProps = (state, ownProps) => {
    const videoId = ownProps.match.params.videoId
    const currentUser = state.session.user;
    return {
        videoId,
        currentUser
    };
};

const mapDispatchToProps = dispatch => ({
    createRubric: data => dispatch(createRubric(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RubricForm);