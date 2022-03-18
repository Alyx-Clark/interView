import { connect } from 'react-redux';

import VideoShowPage from "./show_video";
import { fetchAllVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    const history = ownProps.history;
    const videoId = ownProps.match.params.videoId;
    const video = state.entities.videos[ownProps.match.params.videoId];
    const currentUser = state.session.user;
    return {
        currentUser,
        videoId,
        video,
        history, 
        videos: Object.values(state.entities.videos)
    };
};

const mDTP = dispatch => {
    return {
        fetchAllVideos: () => dispatch(fetchAllVideos()),
    }
}

export default connect(mapStateToProps, mDTP)(VideoShowPage);