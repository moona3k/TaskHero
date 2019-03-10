import TaskerProfile from './tasker-profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { receiveTasker } from '../../../actions/tasker_actions';
import { updateTaskerId } from '../../../actions/task_actions';

// const mapStateToProps = (state) => {
//     return {
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTasker: (selectedTasker) => dispatch(receiveTasker(selectedTasker)),
        updateTaskerId: (taskerId) => dispatch(updateTaskerId(taskerId))
    }
};

export default withRouter(connect(null, mapDispatchToProps)(TaskerProfile));