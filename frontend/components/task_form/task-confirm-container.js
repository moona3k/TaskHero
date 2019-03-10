import { connect } from 'react-redux';
import TaskConfirmPage from './task-confirm-page';
import { fetchLatestTask } from '../../actions/task_actions';


const mapStateToProps = (state) => {
    return {
       currentTask: state.entities.tasks,
       currentTasker: state.entities.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLatestTask: () => dispatch(fetchLatestTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskConfirmPage);