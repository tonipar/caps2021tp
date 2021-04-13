import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import StylingSamples from "./containers/StylingSamples/StylingSamples";
import Cars from "./containers/Cars/Cars";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/styling">
            <StylingSamples />
          </Route>
          <Route path="/cars">
            <Cars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
