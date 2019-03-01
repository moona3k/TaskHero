import { RECEIVE_TASK_CATEGORY, RECEIVE_TASK_DESCRIPTION, RECEIVE_TASK_DATETIME } from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TASK_CATEGORY:
            return Object.assign({}, state, { task_category: action.task_category });

        case RECEIVE_TASK_DESCRIPTION:
            return Object.assign({}, state, {
                task_category: action.task_description.task_category,
                location: action.task_description.location,
                specific_location: action.task_description.specific_location,
                estimated_time_req: action.task_description.estimated_time_req,
                vehicle_type: action.task_description.vehicle_type,
                description: action.task_description.task_description,
            })
        
        case RECEIVE_TASK_DATETIME:
            return Object.assign({}, state, {
                scheduled_date: action.taskDateTime.taskDate,
                scheduled_time: action.taskDateTime.taskTime
            })
        

        default:
            return state;
    }
};

export default tasksReducer;