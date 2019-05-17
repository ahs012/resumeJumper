import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron';
import {Col, Row, Container} from '../components/Grid';
import API from "../utils/API";

// Grabbing userName from Local Storage




class Profile extends Component {
  state = {
    email : "user"
  };

  componentDidMount() {
    API.getUser(JSON.parse(localStorage.getItem("userEmail")))
      .then(res => {
        console.log(res);
        this.setState({ user: res.data })
      })
      // .then(res => console.log(res.data.email))
      .catch(err => console.log(err));
  }

  render(){
    return(
      <Container fluid>
        <Row>
          <Col size = "md-12">
            <Jumbotron style={{ height: "100", paddingTop: 40, marginTop: 15, marginBottom: 15, textAlign: "center" }}>
                <h1>Profile </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
  )
  }
}



export default Profile;