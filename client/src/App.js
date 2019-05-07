import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Jumbotron from "./components/Jumbotron";



function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Jumbotron>
             <h1>Resume Jumper</h1>
             <br/>
             <h2>Your resume manager!</h2>
             <br/>
             <p>
                 Jump from job to job and just own it. 
             </p>
        </Jumbotron> 

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
