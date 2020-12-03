import React, { Component } from "react";
import {withAuth} from '../lib/AuthProvider'
import { Link } from "react-router-dom";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // console.log('Login -> form submit', { email, password });
    this.props.login({ email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="authform">
        <div className="inputs">
        <form onSubmit={this.handleFormSubmit} className="enterForm">
        
          <label>Email:</label>
          <input
            type='text'
            name='email'
            placeholder="welcometo@dixit.com"
            value={email}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type='password'
            name='password'
            placeholder="******"
            value={password}
            onChange={this.handleChange}
          />
       
          <input  type='submit' value='Login' />
           <div>
            
        <Link to={'/signup'} className="link">Don't have an account?</Link>
        
        </div>
        </form>
        </div>
         
        

       
       
      </div>
    );
  }
}

export default withAuth( Login);
