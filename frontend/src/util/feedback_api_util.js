import axios from 'axios';

export const getVideoFeedbacks = videoId => {
  return axios.get(`/api/videos/feedbacks/${videoId}`)
};

export const deleteVideoFeedback = feedbackId => {
  return axios.delete(`/api/feedbacks/delete/${feedbackId}`)
};

export const createVideoFeedback = feedback => {
  return axios.post(`/api/feedbacks/new`, feedback)
};

export const updateVideoFeedback = feedback => {
  return axios.patch(`/api/feedbacks/edit/${feedback.feedbackId}`, feedback)
};
