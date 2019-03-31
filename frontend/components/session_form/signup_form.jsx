import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      zipcode: ""
    };
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleClick() {
    const user = Object.assign({}, this.state);
    // Object.assign creates a copy of an object
    this.props.processForm(user); // alternatively, you can simply write processForm(this.state)
    // .then(() => this.props.history.push('/dashboard'));
  }

  handleDemo() {
    
      this.setState( {
          first_name: "Daniel",
          last_name: "Moon",
          email: "demo@taskhero.com",
          password: "password123",
          zipcode: "94105"
        })

      const demoUser = {
          email: "demo@taskhero.com",
          password: "password123"
      }

      setTimeout( () => this.props.loginDemo(demoUser), 950);

    }

  render() {
    return (
      <div className="session-form-container">
        <div className="session-form-box-signin">
          <img className="session-form-logo-signin" src="https://i.imgur.com/SsPX10q.png" />
          <form>
            <div className="session-form">
              <div className="session-form-label">First Name</div>
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.handleInput("first_name")}
                className="session-form-input"
              />
              <div className="session-form-label">Last Name</div>
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.handleInput("last_name")}
                className="session-form-input"
              />
              <div className="session-form-label">Email Address</div>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput("email")}
                className="session-form-input"
              />
              <div className="session-form-label">Password</div>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
                className="session-form-input"
              />
              <div className="session-form-label">Zip Code</div>
              <input
                type="text"
                value={this.state.zipcode}
                onChange={this.handleInput("zipcode")}
                className="session-form-input"
              />
            </div>
          </form>
          <div className="error-text-signup">{this.renderErrors()}</div>
          <button
            onClick={this.handleClick.bind(this)}
            className="session-submit-button"
          >
            Create Account
          </button>
          <div className="session-form-short-text">OR</div>
          <button
            onClick={this.handleDemo.bind(this)}
            className="session-submit-button"
          >
            Click for Demo User
          </button>
          <div className="session-already-have-account">
            Already have an account? {this.props.navLink}
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;



{/* <div className="session-form-disclaimer">
            By clicking below and creating an account, I agree to TaskHero's{" "}
            <b className="session-green-text">Terms of Service</b> and{" "}
            <b className="session-green-text">Privacy Policy</b>.
          </div> */}