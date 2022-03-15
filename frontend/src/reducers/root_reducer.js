import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import ModalReducer from './modal_reducer';
import entities from './entities_reducer';

const RootReducer = combineReducers({
    entities,
    session,
    errors,
    modal: ModalReducer
});

export default RootReducer;