import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppContextProvider } from "./Context/globalContext";

import HomePage from "./Pages/HomePage";
import SubscribePage from "./Pages/SubscribePage";
import ProfilePage from "./Pages/ProfilePage";
import PrivateRoute from "./Components/PrivateRoute";
import PrivateRouteAdmin from "./Components/PrivateRouteAdmin";
import TransactionPage from "./Pages/TransactionPage";

import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div>
          
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <PrivateRoute path="/home" exact component={HomePage} />
            <PrivateRoute path="/subscribe" exact component={SubscribePage} />
            <PrivateRoute path="/profile" exact component={ProfilePage} />
            <PrivateRouteAdmin path="/transaction" exact component={TransactionPage} />
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
