import TaskDateTime from './task-date-time';
import { connect } from 'react-redux';
import { receiveTaskDateTime, updateTaskDate, updateTaskTime } from '../../../actions/task_actions';

const mapStateToProps = (state) => {
    return {
        taskDate: state.entities.tasks.scheduled_date,
        taskTime: state.entities.tasks.scheduled_time
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTaskDate: (taskDate) => dispatch(updateTaskDate(taskDate)),
        updateTaskTime: (taskTime) => dispatch(updateTaskTime(taskTime)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDateTime);
