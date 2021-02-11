import React from 'react';
import { createEmail } from '../services/index';
import { connect } from 'react-redux';

class CreateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      validEmail: false,
      validPassword: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleValidator = this.handleValidator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidator() {
    const { email, password } = this.state;
    const validator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = validator.test(String(email).toLowerCase());
    const five = 5;
    if (password.length > five) {
      this.setState({ validPassword: true });
    } else {
      this.setState({ validPassword: false });
    }
    if (isValid) {
      this.setState({ validEmail: true });
    } else {
      this.setState({ validEmail: false });
    }
  }

  changeHandler({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.handleValidator();
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    const create = await createEmail(email, password);
    if(create) history.push('/');
  }

  render() {
    const {
      email, password, validEmail, validPassword,
    } = this.state;
    return (
      <div className="create-user-container">
        <h1>Create User</h1>
        <div className="create-user-login-div">
          <input
            required
            value={ email }
            name="email"
            placeholder="Email"
            onChange={ this.changeHandler }
          >
            </input>
          <input
            required
            name="password"
            type="password"
            value={ password }
            placeholder="Senha"
            onChange={ this.changeHandler }
          >
          </input>
          <button
            type="submit"
            onClick={ this.handleSubmit }
            disabled={ !validEmail || !validPassword }
          >Submit</button>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(CreateUser);
