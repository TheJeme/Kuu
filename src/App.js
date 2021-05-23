import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Source from "./Source";
import Main from "./Main";
import FullscreenView from "./FullscreenView";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Source />
          </Route>
          <Route path="/:id">
            <Main />
          </Route>
          <Route path="/fullscreen">
            <FullscreenView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
