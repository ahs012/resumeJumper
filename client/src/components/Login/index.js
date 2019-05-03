import React from "react";
import Jumbotron from "../Jumbotron";
import {Container} from "../Grid";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Login(props) {
  return (
     <div> 
         <Jumbotron>
             <h1>Resume Jumper</h1>
             <br/>
             <h2>Your resume manager!</h2>
             <br/>
             <p>
                 Jump from job to job and just own it. 
             </p>
        </Jumbotron> 
         <Container fluid>
        
         <div className="row">
         <div className="col-sm-6">
         <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Create account</a>

        <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Login</a>
         </div>
         </div>
         </Container>
     
    
    </div>
  );
}

export default Login;
