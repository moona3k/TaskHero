import { connect } from 'react-redux';
import MyTasks from './my-tasks';
import { fetchAllTasks, deleteSelectedTask } from '../../actions/task_actions';

const mapStateToProps = (state) => {
    return {
        currentTasks: state.entities.tasks.myTasks,
        currentUser: state.entities.users[state.session.currentUser.id]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllTasks: userId => dispatch(fetchAllTasks(userId)),
        deleteSelectedTask: taskId => dispatch(deleteSelectedTask(taskId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks);
