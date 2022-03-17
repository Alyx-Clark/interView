import { connect } from 'react-redux';

import VideoShowPage from "./show_video";

const mapStateToProps = (state, ownProps) => {
    debugger
    const videoId = ownProps.match.params.videoId;
    const currentUser = state.session.user;
    return {
        currentUser,
        videoId
    };
};

export default connect(mapStateToProps)(VideoShowPage);