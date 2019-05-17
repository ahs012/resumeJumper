import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import {Container} from "../components/Grid";

class Login extends Component {
    state = {};

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)
      };

    render () {
        return(<form>Login
            <input name="user-name" onChange={this.handleInputChange} type="text" placeholder="username"></input>
            <input name="password" onChange={this.handleInputChange} type="password" placeholder="password"></input>
            <input name="login-button" onClick={this.handleFormSubmit} type="submit"></input>
            <p>Need an Account?</p>
            <a id="signUp" href="/CreateAccount">Sign Up</a>
        </form>) 
    }
}



export default Login;
