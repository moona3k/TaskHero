import React from 'react';
import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, login, removeErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        // formType: "signup",
        navLink: <Link to="/login">Log in</Link>
        // It's pretty cool how you can pass in components as props!
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (formUser) => dispatch(signup(formUser)),
        removeErrors: () => dispatch(removeErrors()),
        loginDemo: (demoUser) => dispatch(login(demoUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

// import { connect } from 'react-redux';
// import { signup } from '../../actions/session_actions';
// // import action that we need to create new users
// import Signup from './signup';
// // import presentational component

// // mapStateToProps is not needed
// // because sign-up page does need to access any data from the global state

// const mapDispatchToProps = dispatch => {
//     return ({
//         signup: formUser => dispatch(signup(formUser))
//     })
// };
// // 'formUser' will be what is submitted via the form

// export default connect(null, mapDispatchToProps)(Signup);