import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import "../src/css/style.css";
import "./App.css";
import Index from "./component/GoogleDrive/Index";
import Jiralogin from "./component/jira/jiraLogin";
import ConfluenceLogin from "./component/confluence/ConfluenceLogin";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <Index />
          </Route>
          <Route path="/confluenceLogin">
            <ConfluenceLogin />
          </Route>
          <Route path="/jiralogin">
            <Jiralogin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
