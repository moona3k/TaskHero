import { connect } from 'react-redux';
import { initializeTask } from '../../actions/task_actions';
import { withRouter } from 'react-router-dom';

import TaskBookingMain from './task_booking_main';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.currentUser.id]
    }
}

// 'dispatch' is provided by the store
const mapDispatchToProps = (dispatch) => {
    return {
        initializeTask: (taskCategory) => dispatch(initializeTask(taskCategory))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskBookingMain));