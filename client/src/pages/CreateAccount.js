import React, { Component } from "react";



class CreateAccount extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        address: '',
        password: ''
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        if (name === "password") {
          value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
          alert("Fill out your first and last name please!");
        } else if (this.state.password.length < 6) {
          alert(
            `Choose a more secure password ${this.state.firstName} ${this.state
              .lastName}`
          );
        } else {
          alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        }
    
        this.setState({
          firstName: "",
          lastName: "",
          password: ""
        });
      };
        

    render() {
        return (
            <form> Create An Account
                <input placeholder='First Name'
                    value={this.state.firstName}
                    onChange={e => this.setState({ firstName: e.target.value })} />
                <input placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={e => this.setState({ lastName: e.target.value })} />
                <input placeholder='User Name'
                    value={this.state.userName}
                    onChange={e => this.setState({ userName: e.target.value })} />
                <input placeholder='Address'
                    value={this.state.address}
                    onChange={e => this.setState({ address: e.target.value })} />
                <input placeholder='Password' type='Password'
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })} />
                <button onClick={() => this.onSubmit()}>Create Account</button>
            </form>
        )
    }
}






export default CreateAccount;