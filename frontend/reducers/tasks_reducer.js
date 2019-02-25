import { RECEIVE_TASK_CATEGORY } from '../actions/task_actions';
import { RECEIVE_TASK_DESCRIPTION } from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TASK_CATEGORY:
            return Object.assign({}, state, { task_category: action.task_category });

        case RECEIVE_TASK_DESCRIPTION:
            
            

        default:
            return state;
    }
};

export default tasksReducer;