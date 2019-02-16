import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            zipcode: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <div className="login-form-background-image">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Welcome to Task Hero!
                        <br />
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}

                        <div className="login-form">
                            <label>First Name:
                        <input
                                    type="text"
                                    value={this.state.first_name}
                                    onChange={this.handleInput('first_name')}
                                    className="login-input"
                                />
                            </label>
                            <br />

                            <label>Last Name:
                        <input
                                    type="text"
                                    value={this.state.last_name}
                                    onChange={this.handleInput('last_name')}
                                    className="login-input"
                                />
                            </label>
                            <br />

                            <label>Email Address:
                        <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput('email')}
                                    className="login-input"
                                />
                            </label>
                            <br />

                            <label>Password:
                        <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />

                            <label>Zip Code:
                        <input
                                    type="text"
                                    value={this.state.zipcode}
                                    onChange={this.handleInput('zipcode')}
                                    className="login-input"
                                />
                            </label>
                            <br />

                            <input type="submit" value={this.props.formType} className="session-submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default SessionForm;