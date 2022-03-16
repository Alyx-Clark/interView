import { connect } from 'react-redux';

import ShowRubrics from "./show_rubrics";
import { fetchVideoFeedbacks, deleteVideoFeedbacks } from '../../actions/feedback_actions';

const mapStateToProps = (state) => {
    const rubrics = state.entities.rubrics;
    const currentUser = state.session.user;
    return {
        rubrics,
        currentUser
    };
};

const mapDispatchToProps = dispatch => ({
    fetchVideoRubrics: videoId => dispatch(fetchVideoFeedbacks(videoId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowRubrics);