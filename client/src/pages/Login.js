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
        const userEmail = localStorage.setItem('userEmail', JSON.stringify(this.state.email));
        console.log(this.state);
      };
      
    render () {
        return(<form>Login
            <input name="email" onChange={this.handleInputChange} type="text" placeholder="email"></input>
            <input name="password" onChange={this.handleInputChange} type="password" placeholder="password"></input>
            <input name="login-button" onClick={this.handleFormSubmit} type="submit"></input>
        </form>)
    }
}



export default Login;
