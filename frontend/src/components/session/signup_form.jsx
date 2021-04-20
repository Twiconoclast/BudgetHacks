import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      balance: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      balance: this.state.balance,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

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
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h2>Sign Up for BudgetHacks</h2>
          <h4></h4>
          <div className="signup-form">
            <br/>
                <label className='login-label'> Username:
                <br/>
                    <input className='login-input' type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        placeholder="Choose your Username"
                    />
                </label>
            <br/>
                <label className='login-label'> Starting Account Balance:
                    <input className='login-input' type="number"
                        value={this.state.balance}
                        onChange={this.update('balance')}
                        placeholder="Enter your starting account balance"
                    />
                </label>
            <br/>
              <label className='login-label'> Password:
                    <input className='login-input' type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Choose your Password"
                    />
                </label>
            <br/>
              <label className='login-label'> Confirm Password:
                <input className='login-input' type="password"
                    value={this.state.password2}
                    onChange={this.update('password2')}
                    placeholder="Confirm Password"
                />
                </label>
            <br/>
            <button className='submit-button' type="submit">Submit</button>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);