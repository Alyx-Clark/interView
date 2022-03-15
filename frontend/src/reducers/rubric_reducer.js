import { RECEIVE_RUBRIC, RECEIVE_RUBRICS, REMOVE_REVIEW } from "../actions/rubric_actions";

const RubricsReducer = (state = {}, action) => {
    Object.freeze(Oldstate);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RUBRIC:
            return Object.assign({}, nextState, {[action.rubric.id]: action.rubric})
        case RECEIVE_RUBRICS:
            return action.rubrics;
        case REMOVE_REVIEW:
            delete nextState[action.rubricId];
            return nextState;
        default:
            return state;
    }
};

export default RubricsReducer;