import { connect } from 'react-redux';

import VideoShowPage from "./show_video";

const mapStateToProps = (state, ownProps) => {
    const history = ownProps.history;
    const videoId = ownProps.match.params.videoId;
    const currentUser = state.session.user;
    return {
        currentUser,
        videoId,
        history
    };
};

export default connect(mapStateToProps)(VideoShowPage);