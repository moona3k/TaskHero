import ChooseTasker from './choose_tasker';
import { connect } from 'react-redux';

import { fetchAllTaskers } from '../../actions/tasker_actions';

const mapStateToProps = (state) => {
    return {
        currentTask: state.entities.tasks,
        // taskers: state.entities.users
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTaskers: (taskCategory) => dispatch(fetchAllTaskers(taskCategory))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTasker);