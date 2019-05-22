import React from "react";
import { Container } from "../components/Grid";
import { Link } from 'react-router-dom'
import  '../components/Background/background.css'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Home(props) {
  return (
    <Container>
      <body className='container' style={{marginLeft: '25%', marginTop: '10%', display: 'inline-block', color: '#000080' }}>
        <h1 style={{ fontSize: '45px', fontFamily:'Roboto, sans-serif' }}>Resume Ready!</h1>
        <br />
        <h2 style={{fontFamily:'Roboto, sans-serif'}}>Your Resume Manager</h2>
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
        <img alt='resumePic' src={require('../components/Assets/images/resume.png')} style={{ width: '450px', margin: '-215px 15px 15px 310px', display: 'inline-block' }} />
      </body>
    <section class='container' style={{ overflow: 'hidden', display: 'block', height: '230px', marginRight: 'auto', marginLeft: 'auto', background: '#00b285', position: 
      'relative' }}>
          <div class='number' style={{display: 'block', width: '55%', height: '120px', marginLeft: '150px', paddingTop: '20px',
    paddingBottom: '20px', float: 'left', clear: 'left', borderTight: '1px solid rgba(255,255,255,.4);'}}>
            <h3 class='resumeNumber'>1,000,000</h3>
            <h4 class='counting' style={{fontfamily: 'Source Sans Pro,sans-serif', color: '#fff', 
            fontWeight: '300',textAlign: 'center'}}>Resumes being made and counting </h4>  
          </div>
        <div class='header'>
          <h5 class='perfectHeading' style={{width: '373px', marginTop: '5px', marginLeft: '30px', fontWeight: '100', fontFamily: 'Source Sans Pro ,sans-serif', color: '#fff', fontSize: '45px',
          lineHeight: '50px', textAlign: 'left'}}>Stay Ready so you don’t have to Get Ready</h5>
        </div>
      </section>
    </Container>


  );
}

export default Home;
