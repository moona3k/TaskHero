import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            zipcode: ''
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
        const user = Object.assign({}, this.state);
        // Object.assign creates a copy of an object
        this.props.processForm(user) // alternatively, you can simply write processForm(this.state)
            // .then(() => this.props.history.push('/dashboard'));
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="session-form-box">
                    <img className="session-form-logo" src="https://bit.ly/2V9Rgsd" />
                    <form>
                        <div className="session-form">
                            <div className="session-form-label">First Name</div>
                            <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} className="session-form-input"/>
                            <div className="session-form-label">Last Name</div>
                            <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} className="session-form-input"/>
                            <div className="session-form-label">Email Address</div>
                            <input type="text" value={this.state.email} onChange={this.handleInput('email')} className="session-form-input" />
                            <div className="session-form-label">Password</div>
                            <input type="text" value={this.state.password} onChange={this.handleInput('password')} className="session-form-input"/>
                            <div className="session-form-label">Zip Code</div>
                            <input type="text" value={this.state.zipcode} onChange={this.handleInput('zipcode')} className="session-form-input"/>
                        </div>
                    </form>
                    <div className="session-form-disclaimer">By clicking below and creating an account, I agree to TaskHero's <b className="session-green-text">Terms of Service</b> and <b className="session-green-text">Privacy Policy</b>.</div>
                    <button onClick={this.handleClick.bind(this)} className="session-submit-button"> Create Account</button>
                    <div>{this.renderErrors()}</div>
                    <div className="session-already-have-account">Already have an account? {this.props.navLink}</div>
                </div>
            </div>
    
        )
    }


}

export default SignupForm;