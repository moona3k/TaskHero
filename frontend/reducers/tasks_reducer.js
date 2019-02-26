import { RECEIVE_TASK_CATEGORY } from '../actions/task_actions';
import { RECEIVE_TASK_DESCRIPTION } from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TASK_CATEGORY:
            return Object.assign({}, state, { task_category: action.task_category });

        case RECEIVE_TASK_DESCRIPTION:
            return Object.assign({}, state, {
                location: action.task_description.location,
                specific_location: action.task_description.specific_location,
                estimated_time_req: action.task_description.estimated_time_req,
                vehicle_type: action.task_description.vehicle_type,
                description: action.task_description.task_description,
            })

        default:
            return state;
    }
};

export default tasksReducer;