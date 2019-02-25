import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TaskDescription from './task_description';

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

