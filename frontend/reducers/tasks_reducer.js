import { RECEIVE_TASK_CATEGORY,
        RECEIVE_LATEST_TASK,
        RECEIVE_TASK_REQUIREMENT, 
        RECEIVE_TASKER_ID,
        RECEIVE_TASK_DATE,
        RECEIVE_TASK_TIME,
        RECEIVE_TASK_DESCRIPTION,
        RECEIVE_ALL_TASKS,
        DELETE_SELECTED_TASK
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
                scheduled_time: action.task.scheduled_time,
                scheduled_date: action.task.scheduled_date,
                user_id: action.task.user_id,
                tasker_id: action.task.tasker_id
            })

        case RECEIVE_TASK_REQUIREMENT:
            return Object.assign({}, state, {
                // id: action.task_description.id,
                task_category: action.taskRequirement.task_category,
                location: action.taskRequirement.location,
                specific_location: action.taskRequirement.specific_location,
                estimated_time_req: action.taskRequirement.estimated_time_req,
                vehicle_type: action.taskRequirement.vehicle_type,
                description: action.taskRequirement.description,
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

        case RECEIVE_TASK_DESCRIPTION:
            return Object.assign({}, state, {
                description: action.taskDescription
            })
            
        case RECEIVE_ALL_TASKS:
            return Object.assign({}, state, {
                myTasks: action.tasks
            })

        case DELETE_SELECTED_TASK:
            
            let objectOfTasks = Object.assign({}, state.myTasks)

            let arrayOfTasks = [];
            Object.keys(objectOfTasks).map( key => {
                let singleTask = objectOfTasks[key];
                arrayOfTasks.push(singleTask);
            });

            let taskId = action.taskId;

            let newState = arrayOfTasks.filter( task => {
                    return task.id !== taskId
                })

            return {
                myTasks: newState
            }

        default:
            return state;
    }
};

export default tasksReducer;