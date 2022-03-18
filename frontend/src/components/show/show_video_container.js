import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoShowPage from "./show_video";
import { fetchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const history = ownProps.history;
    const videoId = ownProps.match.params.videoId;
    const video = state.entities.videos[ownProps.match.params.videoId];
    // const video = state.entities.videos
    const currentUser = state.session.user;
    return {
        currentUser,
        videoId,
        video,
        history
    };
};

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
})

export default withRouter(connect(mapStateToProps, mDTP)(VideoShowPage));