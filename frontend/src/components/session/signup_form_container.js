import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { open, close } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mDTP = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)), 
        close: () => dispatch(close()),
        login: () => dispatch(open('login')),
        loginDemo: (user) => dispatch(login(user)), 
    }
}

export default connect( mSTP, mDTP)(SignupForm);