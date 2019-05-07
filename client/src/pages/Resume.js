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
    resume: [],
    jobs:[],
    name: "",
    jobs:"",
    skills: "",
    startDate:"",
    endDate:"",
    tech:""
  };

  componentDidMount() {
    this.loadResume();
  }

  loadResume = () => {
    API.getResume()
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteResume = name => {
    API.deleteResume(name)
      .then(res => this.loadResume())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    
    });
  };
////////EDIT FORMS FOR RESUME////
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.skills && this.state.startDate && this.state.endDate ) {
      API.saveResume({
        name: this.state.name,
        skills: this.state.skills,
        startDate: this.state.startDate,
        endDate:this.state.endDate
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
              <h1>Create Resume</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.skills}
                onChange={this.handleInputChange}
                name="skills"
                placeholder="enter skills used for job here"
              />
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="StartDate"
                placeholder="Date Started"
              />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="Date Ended"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.skills && this.state.startDate && this.state.endDate)}
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
