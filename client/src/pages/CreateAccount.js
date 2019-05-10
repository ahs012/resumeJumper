import React, { Component } from "react";
import API from "../utils/API";



class CreateAccount extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        address: '',
        password: '',
        nameOnCard: '',
        cardNumber: '',
        date: '',
        securityCode: '',
        postal: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,

        });
    };

    handleFormSubmit = event => {
        //     var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        //    var emailinput = (this.state.email);
        //    if (email_reg.test(emailinput) == false) {
        //        alert('Please enter a valid email');
        //    }
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.userName && this.state.password && this.state.address && this.state.cardNumber && this.state.securityCode && this.state.date) {
            API.saveUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                password: this.state.password,
                address: this.state.address,
                nameOnCard: this.state.nameOnCard,
                cardNumber: this.state.cardNumber,
                date: this.state.date,
                securityCode: this.state.securityCode,
                postal: this.state.postal
            })
                // .then(res => this.loadUsers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <form> Create An Account
                <input placeholder='First Name'
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange} />
                <input placeholder='Last Name'
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange} />
                <input placeholder='User Name'
                    value={this.state.userName}
                    name="userName"
                    onChange={this.handleInputChange} />
                <input placeholder='Address'
                    value={this.state.address}
                    name="address"
                    onChange={this.handleInputChange} />
                <input placeholder='Password'
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange} />


                {/* <h5>Subscription Info</h5> */}
                {/* <input placeholder='Name On Card'
                    value={this.state.nameOnCard}
                    name="NameOnCard"
                    onChange={this.handleInputChange} /> */}
                    <input placeholder='Name on Card'
                    value={this.state.nameOnCard}
                    name="nameOnCard"
                    onChange={this.handleInputChange} />
                <input placeholder='Card Number'
                    value={this.state.cardNumber}
                    name="cardNumber"
                    onChange={this.handleInputChange} />
                <input placeholder='MM/DD/YYYY'
                    value={this.state.date}
                    name="date"
                    onChange={this.handleInputChange} />
                <input placeholder='CVV'
                    value={this.state.securityCode}
                    name="securityCode"
                    onChange={this.handleInputChange} />
                <input placeholder='Postal'
                    value={this.state.postal}
                    name="postal"
                    onChange={this.handleInputChange} />
                <button onClick={this.handleFormSubmit}>Create Account</button>
            </form>
        )
    }
}






export default CreateAccount;