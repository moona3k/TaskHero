import TaskerProfile from './tasker-profile';
import { connect } from 'react-redux';

import { receiveTasker } from '../../../actions/tasker_actions';

// const mapStateToProps = (state) => {
//     return {
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTasker: (selectedTasker) => dispatch(receiveTasker(selectedTasker))
    }
};

export default connect(null, mapDispatchToProps)(TaskerProfile);