import React, { Component } from "react";
import { Link } from "react-router-dom";
import {withAuth} from '../lib/AuthProvider'

class Signup extends Component {
  state = { username:"",email: "", password: "" };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const {username, email, password } = this.state;
    // console.log('Signup -> form submit', { username, email, password });
    this.props.signup({ username, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="authform">
       

        <form  onSubmit={this.handleFormSubmit}  className="enterForm"> 
        <div className="inputs">
        <label>Username:</label>
          <input
            type='text'
            name='username'
            value={username}
            placeholder="Username"
            onChange={this.handleChange}
          />

         
         <label>Email:</label>
          <input
            type='text'
            name='email'
            value={email}
            placeholder="email@email.com"
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={password}
            placeholder="******"
            onChange={this.handleChange}
          />

          <input className="signupbttn" type='submit' value='Signup' />
          <Link className="link"to={"/login"}><p>Already have account?</p></Link>
        {/* <Link to={"/login"}> Login</Link> */}
        </div>
        </form>

        
      </div>
    );
  }
}

export default withAuth(Signup) ;
