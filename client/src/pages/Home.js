import React from "react";
import { Container } from "../components/Grid";
import { Link } from 'react-router-dom'




// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Home(props) {
  return (
    <Container >
      <body style={{marginLeft: '25%', marginTop: '10%', display:'inline-block'}}>
      <h1>Career Optimizer</h1>
      <br />
      <h2>Your resume manager!</h2>
      <br />
      <p>
        Jump from job to job and just own it.
      </p>
      <div className="row">
        <div className="col-lg-12">
          <Link className="btn btn-warning" to="/createaccount" style={{ margin: '0.25em 1em', color:'black' }}>Create account</Link>
          <Link className="btn btn-warning" to="/login" style={{color:'black'}}>Login</Link>
        </div>
      </div>
      <img src={require('../components/Assets/images/resume.png')} style={{width:'450px', margin: '-215px 15px 15px 290px', display:'inline-block' }}/>
      </body>
    </Container>



  );
}

export default Home;
