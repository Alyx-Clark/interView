import { connect } from 'react-redux';
import { fetchVideos, deleteVideo } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mSTP = state => {
  return {
    videos: Object.values(state.entities.videos)
  }
}

const mDTP = dispatch => {
  return {
    fetchVideos: userId => dispatch(fetchVideos(userId)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
  }
}

export default connect(mSTP, mDTP)(VideoIndex)