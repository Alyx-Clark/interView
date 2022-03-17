import { connect } from 'react-redux';

import ShowRubrics from "./show_rubrics";
import { fetchVideoRubrics } from '../../actions/rubric_actions';

const mapStateToProps = (state, ownProps) => {
    const videoId = ownProps.videoId;
    const rubrics = state.entities.rubrics;
    const currentUser = state.session.user;
    return {
        rubrics,
        currentUser,
        videoId
    };
};

const mapDispatchToProps = dispatch => ({
    fetchVideoRubrics: videoId => dispatch(fetchVideoRubrics(videoId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowRubrics);