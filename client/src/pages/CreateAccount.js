import React, { Component } from "react";



class CreateAccount extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        address: '',
        password: ''
    }

    

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
                <input placeholder='Password'
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })} />
                <button onClick={() => this.onSubmit()}>Create Account</button>
            </form>
        )
    }
}






export default CreateAccount;