import axios from 'axios';

// fetch all rubrics for a video
export const fetchVideoRubrics = videoId => {
    return axios.get(`/api/videos/${videoId}/rubric`);
};

// fetch all rubrics from a user
export const fetchUserRubrics = userId => {
    return axios.get(`/api/rubrics/user/${userId}`);
};

// score rubric for a video
export const createRubric = data => {
    return axios.post('/api/rubrics/new', data);
}

// delete a rubric for a video
export const deleteRubric = rubricId => {
    return axios.delete(`/api/rubrics/delete/${rubricId}`);
};

// update a rubric for a video
export const updateRubric = (rubricId, data) => {
    return axios.patch(`/api/rubrics/edit/${rubricId}`, data);
};