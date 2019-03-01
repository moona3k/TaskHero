import TaskCalendar from './task_calendar';
import { connect } from 'react-redux';
import { receiveTaskDateTime } from '../../actions/task_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        receiveDateTime: (taskDateTime) => dispatch(receiveTaskDateTime(taskDateTime))
    }
}

export default connect(null, mapDispatchToProps)(TaskCalendar);