import { connect } from 'react-redux';
import TaskConfirmPage from './task-confirm-page';
import { fetchLatestTask, updateTaskDescription } from '../../actions/task_actions';
import { fetchAssignedTasker } from '../../actions/tasker_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
       currentTask: state.entities.tasks,
       currentTasker: state.entities.taskers,
       currentUser: state.entities.users[state.session.currentUser.id]

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLatestTask: () => dispatch(fetchLatestTask()),
        fetchAssignedTasker: taskerId => dispatch(fetchAssignedTasker(taskerId)),
        updateTaskDescription: taskDescription => dispatch(updateTaskDescription(taskDescription))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskConfirmPage));