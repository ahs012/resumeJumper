import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import { Container } from "./components/Grid";
import './components/Background/background.css';




function App() {
  const currentRoute = window.location.pathname
  return (
    
    <Router>
      <body className='body'>
      <div>
        
        {currentRoute=="/" || "/login" ? "" : <Nav />}
      <main style={{marginTop: '64px'}}></main>
     
        <Switch>
          <Route exact path="/" component={Home} />  
          <Route exact path="/Login" component={Login} />  
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/createaccount" component={Main} />
          <Route exact path="/" component={Users} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Users/:name" component={Detail} />
          <Route exact path="/Resume/" component={Resume} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
      </body>
    </Router>
  );
}



export default App;
