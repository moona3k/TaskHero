import { RECEIVE_TASK_CATEGORY,
        RECEIVE_LATEST_TASK,
        RECEIVE_TASK_DESCRIPTION, 
        RECEIVE_TASKER_ID,
        RECEIVE_TASK_DATE,
        RECEIVE_TASK_TIME
    } from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        // case RECEIVE_TASK_CATEGORY:
        //     return Object.assign({}, state, { task_category: action.task_category });

        case RECEIVE_LATEST_TASK:
            return Object.assign({}, state, {
                task_category: action.task.task_category,
                location: action.task.location,
                specific_location: action.task.specific_location,
                description: action.task.description,
                estimated_time_req: action.task.estimated_time_req,
                vehicle_type: action.task.vehicle_type,
                user_id: action.task.user_id,
                tasker_id: action.task.tasker_id
            })

        case RECEIVE_TASK_DESCRIPTION:
            return Object.assign({}, state, {
                // id: action.task_description.id,
                task_category: action.task_description.task_category,
                location: action.task_description.location,
                specific_location: action.task_description.specific_location,
                estimated_time_req: action.task_description.estimated_time_req,
                vehicle_type: action.task_description.vehicle_type,
                description: action.task_description.description,
            })
   
        case RECEIVE_TASKER_ID:
            return Object.assign({}, state, {
                tasker_id: action.taskerId
            })

        case RECEIVE_TASK_DATE:
            return Object.assign({}, state, {
                scheduled_date: action.taskDate
            })

        case RECEIVE_TASK_TIME:
            return Object.assign({}, state, {
                scheduled_time: action.taskTime
            })

        default:
            return state;
    }
};

export default tasksReducer;