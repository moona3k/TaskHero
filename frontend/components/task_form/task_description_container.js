import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TaskDescription from './task_description';
import { updateTaskDescription, fetchLatestTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
    
    return {
        currentTask: state.entities.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLatestTask: () => dispatch(fetchLatestTask()),
        updateTaskDescription: (taskDescription) => dispatch(updateTaskDescription(taskDescription))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskDescription));