import React from "react";
import Jumbotron from "../components/Jumbotron";
import {Container} from "../components/Grid";
import { Link } from 'react-router-dom'




// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Home(props) {
  return (
     <div> 
      
         <Container fluid>
        
         <div className="row">
         <div className="col-sm-6">
         <Link className="btn btn-primary btn-lg active" to="/createaccount">Create account</Link>

         <Link className="btn btn-secondary btn-lg active" to="/login">Login</Link>
        
         </div>
         </div>
         </Container>
     
    
    </div>
  );
}

export default Home;
