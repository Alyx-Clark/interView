import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO} from "../actions/video_actions";

const VideosReducer = (Oldstate={}, action) => {

  Object.freeze(Oldstate)
  let nextState = Object.assign({}, Oldstate)

  switch(action.type) {

    case RECEIVE_VIDEOS:
      let obj = {}
      action.videos.forEach(video => {
        obj[video._id] = video;
      })
      return obj;

    case RECEIVE_VIDEO:
      nextState[action.video._id] = action.video;
      return nextState;

    case REMOVE_VIDEO:
      delete nextState[action.videoId]
      return nextState;

    default:
      return Oldstate;
  }
}

export default VideosReducer