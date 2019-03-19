import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
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

    handleClick() {
        // console.log('render')
        const user = Object.assign({}, this.state);
        // Object.assign creates a copy of an object
        this.props.processForm(user) // alternatively, you can simply write processForm(this.state)
            // .then(() => this.props.history.push('/dashboard'));
    }

    handleDemoUser() {
        this.setState( {
            email: "demo@taskhero.com",
            password: "password123"
        });

        setTimeout(() => this.props.processForm(this.state), 800);
    }

    render() {
        // console.log(this.state)
        return (
            <div className="session-form-container">
                <div className="session-form-box">
                    <img className="session-form-logo" src="https://i.imgur.com/SsPX10q.png" />  
                    <form>
                        <div className="session-form-label">Email Address</div>
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} className="session-form-input" />                        
                        <div className="session-form-label">Password</div>
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} className="session-form-input" />                                
                    </form>
                    <div className="error-text-login">{this.renderErrors()}</div>
                    <br />
                    <button onClick={this.handleClick.bind(this)} className="session-submit-button">Log in</button>
                    <div className="session-form-short-text">OR</div>
                    <button onClick={this.handleDemoUser.bind(this)} className="session-submit-button">Click for Demo User</button>
                    <div className="session-already-have-account">Don't have an account? {this.props.navLink}</div>
                </div>
            </div>

        )
    }


}

export default LoginForm;