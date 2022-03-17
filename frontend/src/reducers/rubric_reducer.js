import { RECEIVE_RUBRIC, RECEIVE_RUBRICS, REMOVE_RUBRIC } from "../actions/rubric_actions";

const RubricsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RUBRIC:
            // debugger
            return Object.assign({}, nextState, {[action.rubric.id]: action.rubric})
        case RECEIVE_RUBRICS:
            // debugger
            return action.rubrics;
        case REMOVE_RUBRIC:
            delete nextState[action.rubricId];
            return nextState;
        default:
            return state;
    }
};

export default RubricsReducer;