import { connect } from 'react-redux';
import { receiveTaskCategory } from '../../actions/task_actions';
import { withRouter } from 'react-router-dom';

import TaskBookingMain from './task_booking_main';

// 'dispatch' is provided by the store
const mapDispatchToProps = (dispatch) => {
    return {
        receiveTaskCategory: (taskCategory) => dispatch(receiveTaskCategory(taskCategory))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(TaskBookingMain));