import { connect } from 'react-redux';
import { fetchAllVideos, deleteVideo } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mSTP = state => {
  return {
    videos: Object.values(state.entities.videos)
  }
}

const mDTP = dispatch => {
  return {
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
  }
}

export default connect(mSTP, mDTP)(VideoIndex)