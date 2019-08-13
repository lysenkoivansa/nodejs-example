import React from "react";
import {Component} from "react";
import {Container} from '@material-ui/core';

export class App extends Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Container maxWidth="sm">
        Hello, World!
      </Container>
    );
  }
}
