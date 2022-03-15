import axios from 'axios';

export const getVideoFeedbacks = videoId => {
  return axios.get(`/api/videos/feedbacks/${videoId}`)
};

// export const getUserTweets = id => {
//   return axios.get(`/api/tweets/user/${id}`)
// };

// export const writeTweet = data => {
//   return axios.post('/api/tweets/', data)
// }