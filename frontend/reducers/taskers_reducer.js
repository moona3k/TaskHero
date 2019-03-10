import { RECEIVE_ALL_TASKER, 
    RECEIVE_TASKER,
    RECEIVE_ASSIGNED_TASKER
    } from '../actions/tasker_actions';

// Reducers take in 2 parameters: current state & action POJO
const taskersReducer = (state = {}, action) => {
    Object.freeze(state);
    // Never mutate the state in redux; Explain why?

    switch (action.type){
        case RECEIVE_ALL_TASKER:
            return Object.assign({}, state, {
                first_name: action.taskers.first_name,
                last_name: action.taskers.last_name,
                profile_img: action.taskers.profile_img,
                hourly_rate: action.taskers.hourly_rate,
                tasker_aboutme: action.taskers.tasker_aboutme,
                tasker_rank: action.taskers.tasker_rank,
                tasker_skill_type: action.taskers.tasker_skill_type,
                vehicle_type: action.taskers.vehicle_type,
                num_completed_tasks: action.taskers.num_completed_tasks,
                reviews_rating: action.taskers.reviews_rating,
                reviews_num: action.taskers.reviews_num
            })

        case RECEIVE_TASKER:
            return Object.assign({}, state, {
                id: action.selectedTasker.id,
            })

        case RECEIVE_ASSIGNED_TASKER:
            return Object.assigne({}, state, {
                first_name: action.tasker.first_name,
                last_name: action.tasker.last_name,
                profile_img: action.tasker.profile_img,
                hourly_rate: action.tasker.hourly_rate
            })

        default:
            return state;
    }
}

export default taskersReducer;