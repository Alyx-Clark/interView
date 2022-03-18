import { connect } from "react-redux";
import PostVideoForm from './post_video_form'
import { createVideo, fetchAllVideos } from "../../actions/video_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user,
    videos: state.entities.videos,
    errors: Object.values(state.errors.video)
  }
}
const mDTP = dispatch => {
  return {
    createVideo: (video, userId) => dispatch(createVideo(video, userId)),
    fetchAllVideos: () => dispatch(fetchAllVideos())
  }
}

export default connect(mSTP, mDTP)(PostVideoForm)


