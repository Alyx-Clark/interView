import { close } from '../../actions/modal_actions'
import { connect } from 'react-redux';
import Modal from '../modal/modal';

const mSTP = state => ({
    modal: state.modal
});

const mDTP = dispatch => ({
    close: () => dispatch(close())
});

export default connect(mSTP, mDTP)(Modal);