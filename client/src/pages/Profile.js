import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron';
import {Col, Row, Container} from '../components/Grid';

// Grabbing userName from Local Storage
const userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);

function Profile(){
    return(
        <Container fluid>
          <Row>
            <Col size = "md-12">
              <Jumbotron style={{ height: "100", paddingTop: 40, marginTop: 15, marginBottom: 15, textAlign: "center" }}>
                  <h1><bolder> Profile </bolder></h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
    )
}






export default Profile;