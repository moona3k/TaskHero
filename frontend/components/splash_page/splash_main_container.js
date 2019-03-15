import SplashMain from './splash_main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { initializeTask } from '../../actions/task_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        initializeTask: (taskCategory) => dispatch(initializeTask(taskCategory))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(SplashMain));
