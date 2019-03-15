import { connect } from 'react-redux';
import TaskSearchBar from './task-search-bar';
import { initializeTask } from '../../actions/task_actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        initializeTask: (taskCategory) => dispatch(initializeTask(taskCategory))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(TaskSearchBar));