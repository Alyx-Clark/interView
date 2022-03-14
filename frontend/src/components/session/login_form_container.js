import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { open, close } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        errors: state.errors.session
    };
};

const mDTP = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        signup: () => dispatch(open('signup')),
        close: () => dispatch(close()), 
    }
}

export default connect(mSTP,mDTP)(LoginForm);