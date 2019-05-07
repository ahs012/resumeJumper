import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Jumbotron from "./components/Jumbotron";


import Main from "./pages/Main";

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
          <Route exact path="/createaccount" component={Main} />
          <Route exact path="/" component={Users} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Users/:name" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
