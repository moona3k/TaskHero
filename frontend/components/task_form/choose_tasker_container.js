import ChooseTasker from './choose_tasker';
import { connect } from 'react-redux';

import { fetchAllTaskers, receiveTasker } from '../../actions/tasker_actions';
import { fetchLatestTask } from '../../actions/task_actions';

const mapStateToProps = (state) => {
    return {
        currentTask: state.entities.tasks
        // taskers: state.entities.users
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchLatestTask: () => dispatch(fetchLatestTask()),
        fetchAllTaskers: (taskRequirement) => dispatch(fetchAllTaskers(taskRequirement)),
        receiveTasker: (selectedTasker) => dispatch(receiveTasker(selectedTasker))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTasker);