import axios from 'axios';

export const fetchVideos = userId => {
  return axios.get(`/api/videos/${userId}`);
};

export const fetchVideo = videoId => {
  return axios.get(`/api/videos/${videoId}`)
}

export const fetchAllVideos = () => {
  return axios.get('/api/videos')
}

export const createVideo = video => {
  let formData = new FormData();
  for (let key in video) {
    formData.append(key, video[key])
  }
  console.log(formData)
  return axios.post('/api/videos', formData, {headers: { "Content-Type": "multipart/form-data" }})
}

export const deleteVideo = videoId => {
  return axios.delete(`/api/video/${videoId}`)
}