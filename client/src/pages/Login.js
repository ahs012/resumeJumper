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
          <h1 style={{color: '#000080', padding: '1%'}}>Login</h1>
            <input name="email" onChange={this.handleInputChange} type="text" placeholder="email"></input>
            <input name="password" onChange={this.handleInputChange} type="password" placeholder="password"></input>
            <input name="login-button" onClick={this.handleFormSubmit} type="submit" className="btn btn-warning" style={{color:'#000080' }}></input>
            <p style={{padding: '1%'}}>Need an Account?
            <a id="signUp" href="/CreateAccount" style={{color: '#000080', padding:'.5%'}}>Sign Up</a>
            </p>
            <p style={{opacity: '0.5'}}>*By logging in, you agree to our Terms of Use and to receive Resume Ready emails & updates and acknowledge that you read our Privacy Policy.</p>
        </form>
        </div>) 
    }
}



export default Login;
