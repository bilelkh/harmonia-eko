import "./App.css";
import Landing from "./layout/Landing";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectList from "./components/project/ProjectList";
import ProjectDetails from "./components/project/ProjectDetails";
import adminProjectList from "./components/admin-project/adminProjectList";
import DetailsProject from "./components/admin-project/DetailsProject";
import EditProject from "./components/admin-project/EditProject";
import AddProject from "./components/admin-project/AddProject";
import AppBar from "./layout/Appbar";
import Footer from "./layout/Footer";
function App() {
  return (
    <Router>
      <Fragment>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/admin/project" component={adminProjectList} />
          <Route exact path="/admin/project/add" component={AddProject} />
          <Route
            exact
            path="/admin/project/edit/:id"
            component={EditProject}
          />
          <Route
            exact
            path="/admin/project/detail/:id"
            component={DetailsProject}
          />
          <Route exact path="/admin/project" component={adminProjectList} />
          <Route exact path="/project" component={ProjectList} />
          <Route exact path="/project/:id" component={ProjectDetails} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
