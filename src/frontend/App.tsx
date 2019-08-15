import React from "react";
import {Component} from "react";
import {Container} from '@material-ui/core';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {Login} from "./components/login/login";

export class App extends Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Router>
        <Container maxWidth="sm">
          <Redirect from="/" to="/login"/>
          <Route path="/login" component={Login}/>
        </Container>
      </Router>
    );
  }
}
