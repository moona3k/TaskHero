import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

// Reducers take in 2 args (state & action object)
// Reducers are just functions that return a JS object that contain the state
const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
            // Syntax: Object.assign(target, ...sources);

        default:
            return state
    }
};

export default usersReducer;