import React from 'react';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        // formType: "login",
        navLink: <Link to="/signup">Sign up</Link>

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (formUser) => dispatch(login(formUser)),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);