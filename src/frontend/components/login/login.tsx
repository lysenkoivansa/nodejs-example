import React from "react";
import {Component} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import { CardHeader } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {AuthApi, AuthApiRequest} from "../../api/auth-api";

export class Login extends Component<{}, LoginState> {
  authApi: AuthApi;

  constructor(props: {}) {
    super(props);

    this.state = {
      login: '',
      password: '',
      token: ''
    };

    this.authApi = new AuthApi();
  }

  handleChange = fieldName => event => this.setState({[fieldName]: event.target.value} as LoginState);

  onSave = () => {
    const credentials: AuthApiRequest = {
      login: this.state.login,
      password: this.state.password
    };

    this.authApi.login(credentials)
      .then(token => {
        this.setState({token: token.message})
      })
      .catch(error => {
        // TODO: show error
      })
  };

  render() {
    return (
      <Card>
        <CardHeader title='Login'/>

        <CardContent>
          <TextField
            label="Login"
            fullWidth
            value={this.state.login}
            onChange={this.handleChange('login')}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
        </CardContent>

        <CardActions>
          <Button size="small" onClick={this.onSave}>Login</Button>
        </CardActions>
      </Card>
    );
  }
}

interface LoginState {
  login: string;
  password: string;
  token: string;
}
