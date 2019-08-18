import React from "react";
import {Component} from "react";
import {Container} from '@material-ui/core';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Login} from "./components/login/login";
import {Employees} from "./components/employees/employees";

export class App extends Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Router>
        <Container maxWidth="sm">
          <Switch>
            <Redirect exact from="/" to="/login"/>
            <Route path="/login" component={Login}/>
            <Route path="/employees" component={Employees}/>
          </Switch>
        </Container>
      </Router>
    );
  }
}
