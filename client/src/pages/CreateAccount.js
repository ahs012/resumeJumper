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
        const userEmail = localStorage.setItem('userEmail', JSON.stringify(this.state.userName));
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
                window.location="./profile";
        }
    };

    render() {
        return (
            <div className="text-center" style={{ paddingBottom: '100px', paddingTop: '5%' }}>
            <form> 
                <h1 style={{color: '#000080'}}>Get Started - Create An Account</h1>
                <p>Already have a Resume Ready Account?
                <a id="logIn" href="/Login" style={{color: '#000080', padding: '.5%'}}>Log in</a>
                </p>
            <br/>
                <input placeholder='First Name'
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange} />
                    <br/>
                <input placeholder='Last Name'
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange} />
                    <br/>
                <input placeholder='Email'
                    value={this.state.userName}
                    name="userName"
                    onChange={this.handleInputChange} />
                    <br/>
                <input placeholder='Address'
                    value={this.state.address}
                    name="address"
                    onChange={this.handleInputChange} />
                    <br/>
                <input placeholder='Password'
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange} />
                    <br/>
                    <br/>


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
                    <br />
                    <input placeholder='MM/DD/YYYY'
                        value={this.state.date}
                        name="date"
                        onChange={this.handleInputChange} />
                    <br />
                    <input placeholder='CVV'
                        value={this.state.securityCode}
                        name="securityCode"
                        onChange={this.handleInputChange} />
                    <br />
                    <input placeholder='Postal'
                        value={this.state.postal}
                        name="postal"
                        onChange={this.handleInputChange} />
                    <br />
                    <button onClick={this.handleFormSubmit} className="btn btn-warning" style={{ color: '#000080', margin: '2%' }}>Create Account</button>
                    <br />
                    <p style={{ opacity: '0.5' }}>*By signing up, you agree to our Terms of Use and to receive Resume Ready emails & updates and acknowledge that you read our Privacy Policy.</p>
                </form>
            </div>
        )
    }
}






export default CreateAccount;