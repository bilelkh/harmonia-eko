import "./App.css";
import Landing from "./layout/Landing";
import Navbar from "./layout/Navbar";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectList from "./components/project/ProjectList";
import ProjectDetails from "./components/project/ProjectDetails";
function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/project" component={ProjectList} />
          <Route exact path="/project/:id" component={ProjectDetails} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
