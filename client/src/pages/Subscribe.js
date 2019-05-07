import React, { Component } from "react";   


class Subscribe extends Component {
    state = {
        nameOnCard: '',
        cardNumber: '',
        date: '',
        securityCode: '',
        postal: ''
    }

    

    render() {
        return (
            <form> Monthly Subrcription
                <input placeholder='Name On Card'
                    value={this.state.nameOnCard}
                    onChange={e => this.setState({ nameOnCard: e.target.value })} />
                <input placeholder='Card Number'
                    value={this.state.cardNumber}
                    onChange={e => this.setState({ cardNumber: e.target.value })} />
                <input placeholder='MM/DD/YYYY'
                    value={this.state.date}
                    onChange={e => this.setState({ date: e.target.value })} />
                <input placeholder='CVV'
                    value={this.state.securityCode}
                    onChange={e => this.setState({ securityCode: e.target.value })} />
                <input placeholder='Postal'
                    value={this.state.postal}
                    onChange={e => this.setState({ postal: e.target.value })} />
                <button onClick={() => this.onSubmit()}>Subscribe</button>
            </form>
        )
    }
}






export default Subscribe;