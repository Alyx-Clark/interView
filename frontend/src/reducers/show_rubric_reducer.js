import { RECEIVE_RUBRICS } from "../actions/rubric_actions";

const avgRubricsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RUBRICS:
            return Object.assign({}, nextState, {
                "professionalismRating": (action.rubrics.data.reduce((rubric, { professionalism }) => rubric + professionalism, 0) / action.rubrics.data.length) || 0,
                "confidenceRating": (action.rubrics.data.reduce((rubric, { confidence }) => rubric + confidence, 0) / action.rubrics.data.length) || 0,
                "contentRating": (action.rubrics.data.reduce((rubric, { content }) => rubric + content, 0) / action.rubrics.data.length) || 0,
                "voiceRating": (action.rubrics.data.reduce((rubric, { voice }) => rubric + voice, 0) / action.rubrics.data.length) || 0
            });
           
        default:
            return state;
    }
};

export default avgRubricsReducer;