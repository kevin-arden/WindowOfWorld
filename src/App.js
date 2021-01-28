import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./Pages/HomePage" 
import SubscribePage from "./Pages/SubscribePage" 
import ProfilePage from "./Pages/ProfilePage"; 


import LandingPage from "./Pages/LandingPage"

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/subscribe" exact>
            <SubscribePage />
          </Route>
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
