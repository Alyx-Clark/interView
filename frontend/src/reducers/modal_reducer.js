import { OPEN, CLOSE } from '../actions/modal_actions';

const ModalReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN:
            return action.modal;
        case CLOSE:
            return null;
        default:
            return state;
    }
};

export default ModalReducer; 