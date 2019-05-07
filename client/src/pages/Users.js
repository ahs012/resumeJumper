import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Users extends Component {
  state = {
    users: [],
    name: "",
    email: "",
    password: "",
    address:""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteUser = name => {
    API.deleteUser(name)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    
    });
  };

  handleFormSubmit = event => {
    var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   var emailinput = (this.state.email);
   if (email_reg.test(emailinput) == false) {
       alert('Please enter a valid email');
   }
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.password && this.state.address && emailinput) {
      API.saveUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        address:this.state.address
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    console.log(this.state.users);
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Submit your info</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Address (required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email && this.state.password && this.state.address)}
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Users in our Database</h1>
            </Jumbotron>
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._name}>
                    <li>Name:{user.name}</li>
                    <li>Email:{user.email}</li>
                    <li>Addres:{user.addres}</li>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;
