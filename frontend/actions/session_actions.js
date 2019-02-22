import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

// regular action creator
// action creators are simply functions that return an action (or action object)
// actions are just JS objects with a type property and optional payload to carry data

// store.dispatch(action); will send action to the store (processed/filtered through the reducers)
// store.dispatch(action-creator-function(optional-data));

const receiveCurrentUser = user => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user: user
    });
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    });
};

const receiveErrors = errors => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    });
};

export const removeErrors = () => {
    return ({
        type: REMOVE_ERRORS
    })
}

// thunk action creator

// create new user
// first arg 'formUser' is the data object from submitting form
// second arg 'dispatch' will be received from middleware
export const signup = formUser => dispatch => {
    return APIUtil.postUser(formUser) 
    // AJAX request; communicate w/ the backend to create new user 
        .then(user => dispatch(receiveCurrentUser(user)) 
        // dispatch action to store; update the frontend redux-store
        , err => (dispatch(receiveErrors(err.responseJSON))
        ));
}

// thunk is middleware that allows us to curry actions



// login user
export const login = formUser => dispatch => {
    return APIUtil.postSession(formUser)
        .then(user => dispatch(receiveCurrentUser(user)) // do this if success
        ), err => (dispatch(receiveErrors(err.responseJSON)) // do this if failure
        );
}

// logout user
export const logout = () => dispatch => {
    return APIUtil.deleteSession()
        .then(() => dispatch(logoutCurrentUser()));
}