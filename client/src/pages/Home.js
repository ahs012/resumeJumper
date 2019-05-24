import React from "react";
import { Container } from "../components/Grid";
import { Link } from 'react-router-dom'


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Home(props) {
  return (
    <Container>
      <div style={{ marginLeft: '25%', marginTop: '10%', display: 'inline-block', color: '#000080' }}>
        <h1 style={{ fontSize: '45px', fontFamily: 'Roboto, sans-serif' }}>Resume Ready!</h1>
        <br />
        <h2 style={{ fontFamily: 'Roboto, sans-serif' }}>Your Resume Manager</h2>
        <br />
        <p style={{ color: 'red', fontSize: '15px', fontFamily: 'Lucida Sans Unicode', fontStyle: 'italic' }}>
          Jump from job to job and just own it.
      </p>
        <div className="row">
          <div className="col-lg-12">
            <Link className="btn btn-warning" to="/createaccount" style={{ margin: '0.25em 1em', color: '#000080' }}>Get Started</Link>
            <Link className="btn btn-warning" to="/login" style={{ color: '#000080' }}>Login</Link>
          </div>
        </div>
        <img alt='resumePic' src={require('../components/Assets/images/resume.png')} style={{ width: '450px', margin: '-215px 15px 15px 340px', display: 'inline-block' }} />
      </div>
    </Container>


  );
}

export default Home;
