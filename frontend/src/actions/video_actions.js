import * as APIUtil from '../util/videos_util'
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const REMOVE_VIDEO_ERRORS = 'REMOVE_VIDEO_ERRORS'

const receiveVideos = videos => {
  return {
    type: RECEIVE_VIDEOS,
    videos: videos.data
  }
}

const receiveVideo = video => {
  return {
    type: RECEIVE_VIDEO,
    video: video.data
  }
}

const removeVideo = videoId => {
  return {
    type: REMOVE_VIDEO,
    videoId
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_VIDEO_ERRORS,
    errors
  }
}

const removeErrors = () => {
  return {
    type: REMOVE_VIDEO_ERRORS,
  }
}

export const fetchVideos = userId => dispatch => {
  APIUtil.fetchVideos(userId)
  .then(videos => dispatch(receiveVideos(videos)))
}

export const fetchVideo = videoId => dispatch => {
  APIUtil.fetchVideo(videoId)
  .then(video => dispatch(receiveVideo(video)))
}

export const fetchAllVideos = () => dispatch => {
  APIUtil.fetchAllVideos()
  .then(videos => dispatch(receiveVideos(videos)))
}

export const createVideo = (video, userId) => dispatch => {
  APIUtil.createVideo(video, userId)
  .then(video => dispatch(receiveVideo(video)))
  .then(() => dispatch(removeErrors()))
  .catch(err => {
    dispatch(receiveErrors(err.response.data))
  })
}

export const deleteVideo = videoId => dispatch => {
  APIUtil.deleteVideo(videoId)
  .then( () => dispatch(removeVideo(videoId)))
}