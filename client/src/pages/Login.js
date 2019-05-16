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
        const userName = localStorage.setItem('userData', JSON.stringify(this.state.userName));
        window.location="./profile";
      };
      
    render () {
        return(<form>Login
            <input name="userName" onChange={this.handleInputChange} type="text" placeholder="username"></input>
            <input name="password" onChange={this.handleInputChange} type="password" placeholder="password"></input>
            <input name="login-button" onClick={this.handleFormSubmit} type="submit"></input>
        </form>)
    }
}



export default Login;
