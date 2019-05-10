import React from "react";
import Jumbotron from "../components/Jumbotron";
import {Container} from "../components/Grid";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Home(props) {
  return (
     <div> 
      
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

export default Home;
