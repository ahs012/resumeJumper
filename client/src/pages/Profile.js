import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron';
import {Col, Row, Container} from '../components/Grid';
import API from "../utils/API";
import {List, ListItem} from '../components/List';

// Grabbing userName from Local Storage


const email = JSON.parse(localStorage.getItem("userEmail"))
console.log(email)

class Profile extends Component {
  state = {
    email : "user"
  };

  componentDidMount() {
    API.getUser(JSON.parse(localStorage.getItem("userEmail")))
      .then(res => {
        console.log(res.data[0]);
        this.setState({ name: res.data[0].name, email: res.data[0].email, address: res.data[0].address })
      })
      .catch(err => console.log(err));

  }
  
  loadResume = () => {
    API.getResume(email)
    .then(res => {
      this.setState({resume: res.data[0]})
    })
    .catch(err => console.log(err))
  }
  

  loadJobs = () => {
    API.getJob()
    .then(res => {
      this.setState({ jobs : res.data[0]});
    })
    .catch(err => console.log(err));
  }
  

  render(){
    return(
      <Container fluid>
        <Row>
          <Col size = "md-12">
            <Jumbotron style={{ height: "100", paddingTop: 40, marginTop: 15, marginBottom: 15, textAlign: "center" }}>
                <h1>{this.state.name}'s Profile </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size ="md-6">
          <img style = {{marginLeft: 250}}className="img-responsive" src={require("../components/Assets/images/profilePlaceholder.png")} alt="logo"/>
          </Col>
          <Col size = "md-6">
          <ListItem>
              <h2><strong>Contact Information:</strong> </h2>
              <li>Name: {this.state.name}</li>
              <li>Email: {this.state.email}</li>
              <li>Address: {this.state.address}</li>
              <li>Phone Number: (786) 300-8714</li>
              <li>Linked In: www.linkedin.com/in/Ahs012</li>
            </ListItem>
          </Col>
        </Row>
        <Row>
        <Col size = "md-12">
          <br></br>
          <ListItem>
              <h2>Your Jobs: </h2>
              <li>Company Name: Univeristy of Miami</li>
              <li>Title: Software Developer</li>
              <li>Address: {this.state.address}</li>
              <li>Skills: Javascript, React, Mongoose</li>
              <hr></hr>
              <li>Company Name: College of London</li>
              <li>Title: Software Developer</li>
              <li>Address: {this.state.address}</li>
              <li>Skills: Javascript, CSS, HTML</li>
              <hr></hr>
              <li>Company Name: Florida International University</li>
              <li>Title: Software Developer</li>
              <li>Address: {this.state.address}</li>
              <li>Skills: Javascript, MySQL</li>
            </ListItem>
          </Col>
        </Row>
      </Container>
  )
  }
}



export default Profile;