import { connect } from "react-redux";
import PostVideoForm from './post_video_form'
import { createVideo } from "../../actions/video_actions";

const mSTP = state => {
  console.log(state)
  return {
    currentUser: state.session.user,
    errors: Object.values(state.errors.video)
  }
}
const mDTP = dispatch => {
  return {
    createVideo: (video, userId) => dispatch(createVideo(video, userId))
  }
}

export default connect(mSTP, mDTP)(PostVideoForm)


