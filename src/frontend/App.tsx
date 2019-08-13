import React from "react";
import {Component} from "react";
import {Container} from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Router>
        <Container maxWidth="sm">
          <Route path="/" exact component={() => <div>Hello, World!</div>}/>
        </Container>
      </Router>
    );
  }
}
