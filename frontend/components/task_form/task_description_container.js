import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TaskDescription from './task_description';
import { updateTaskRequirement, fetchLatestTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    return {
        currentTask: state.entities.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLatestTask: () => dispatch(fetchLatestTask()),
        updateTaskRequirement: (taskRequirement) => dispatch(updateTaskRequirement(taskRequirement))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskDescription));