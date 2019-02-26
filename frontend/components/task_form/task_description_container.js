import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TaskDescription from './task_description';
import { receiveTaskDescription } from '../../actions/task_actions';

const mapStateToProps = (state) => {
    return {
        task_category: state.entities.tasks.task_category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTaskDescription: (taskDescription) => dispatch(receiveTaskDescription(taskDescription))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskDescription));

