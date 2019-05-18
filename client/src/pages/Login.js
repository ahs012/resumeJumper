import React, {Component} from "react";

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

        window.location="./profile";

      };
      
    render () {
        return(
          <div className="text-center" style={{ paddingBottom: '100px', paddingTop: '5%' }}>
        <form>
          <h1 style={{color: '#000080'}}>Login</h1>
            <input name="email" onChange={this.handleInputChange} type="text" placeholder="email"></input>
            <input name="password" onChange={this.handleInputChange} type="password" placeholder="password"></input>
            <input name="login-button" onClick={this.handleFormSubmit} type="submit" className="btn btn-warning" style={{color:'#000080' }}></input>
            <p>Need an Account?</p>
            <a id="signUp" href="/CreateAccount" style={{color: '#000080'}}>Sign Up</a>
        </form>
        </div>) 
    }
}



export default Login;
