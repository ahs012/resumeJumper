import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div>
        <Nav />
      <main style={{marginTop: '64px'}}></main>
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
          <Route exact path="/Login" component={Login} />  
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/createaccount" component={Main} />
          <Route exact path="/" component={Users} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Users/:name" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
