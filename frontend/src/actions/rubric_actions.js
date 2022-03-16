import * as RubricAPIUtil from '../util/rubric_api.util';

export const RECEIVE_RUBRIC = 'RECEIVE_RUBRIC';
export const RECEIVE_RUBRICS = 'RECEIVE_RUBRICS';
export const RECEIVE_RUBRIC_ERRORS = 'RECEIVE_RUBRIC_ERRORS';
export const REMOVE_RUBRIC = 'REMOVE_RUBRIC';

const receiveRubric = rubric => {
    return {
        type: RECEIVE_RUBRIC,
        rubric
    };
};

const receiveRubrics = rubrics => {
    return {
        type: RECEIVE_RUBRICS,
        rubrics
    };
};

const receiveRubricErrors = errors => {
    return {
        type: RECEIVE_RUBRIC_ERRORS,
        errors
    };
};

const removeRubric = rubricId => {
    return {
        type: REMOVE_RUBRIC,
        rubricId
    };
};

export const fetchVideoRubrics = videoId => dispatch => (
    RubricAPIUtil.fetchVideoRubrics(videoId)
        .then(rubrics => dispatch(receiveRubrics(rubrics)))
);

export const fetchUserRubrics = userId => dispatch => (
    RubricAPIUtil.fetchUserRubrics(userId)
        .then(rubrics => dispatch(receiveRubrics(rubrics)))
);

export const createRubric = data => dispatch => (
    RubricAPIUtil.createRubric(data)
        .then(rubric => (dispatch(receiveRubric(rubric))),
            err => (dispatch(receiveRubricErrors(err.response.data))))
);

export const updateRubric = data => dispatch => (
    RubricAPIUtil.updateRubric(data)
        .then(rubric => (dispatch(receiveRubric(rubric))),
            err => (dispatch(receiveRubricErrors(err.response.data))))
);

export const deleteRubric = rubricId => dispatch => (
    RubricAPIUtil.deleteRubric(rubricId)
        .then(() => dispatch(removeRubric(rubricId)))
);
