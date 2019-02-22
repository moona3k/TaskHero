import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.removeErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    renderErrors() {
        return (
            <ul className="session-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // Object.assign creates a copy of an object
        this.props.processForm(user) // alternatively, you can simply write processForm(this.state)
            // .then(() => this.props.history.push('/dashboard'));
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="session-form-background-image">
                    <div className="session-form-box">
                        <form onSubmit={this.handleSubmit}>
                            <img className="session-form-logo" src="https://bit.ly/2V9Rgsd" />
                            <br />

                            <div className="session-form">

                                <label>Email Address</label>
                                <input type="text" value={this.state.email} onChange={this.handleInput('email')} className="login-input" />
                                <br />
                                <label>Password</label>
                                <input type="text" value={this.state.password} onChange={this.handleInput('password')} className="login-input" />
                                <br />

                                <button type="submit" className="session-submit">Log in</button>

                                <div>{this.renderErrors()}</div>
                                <div className="session-already-have-account">No account?  {this.props.navLink}</div>
                            </div>
                        </form>
                        <span>

                        </span>
                    </div>
                </div>
            </div>

        )
    }


}

export default LoginForm;