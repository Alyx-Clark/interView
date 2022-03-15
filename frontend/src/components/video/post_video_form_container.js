import { connect } from "react-redux";
import PostVideoForm from './post_video_form'
import { createVideo } from "../../actions/video_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user,
    errors: Object.values(state.errors.videos)
  }
}

const mDTP = dispatch => {
  return {
    createVideo: video => dispatch(createVideo(video))
  }
}

export default connect(mSTP, mDTP)(PostVideoForm)


