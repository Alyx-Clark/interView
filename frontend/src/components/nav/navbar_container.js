import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import * as ModalControl from '../../actions/modal_actions';

import NavBar from './navbar';

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()), 
    open: modal => dispatch(ModalControl.open(modal))
})

export default connect( mSTP, mDTP)(NavBar);