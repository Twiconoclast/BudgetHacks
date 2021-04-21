import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/dashboard');
    }
    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form className='login-form' onSubmit={this.handleSubmit}>
          <h2>Sign In</h2>
          <h4>Build a Budget, Track Spending, <br/> Earn Rewards</h4> 
          <div className="login-form-div">
              <label className='login-label'> Username:
                <br/>
                <input className='login-input' type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Enter your Username"
                />
              </label>
            <br/>
                <label className='login-label'> Password:
                    <input className='login-input' type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Enter your Password"
                    />
                </label>
            <br/>
            <div className='button-holder'>
            <button className='submit-button' type="submit">Submit</button>
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);