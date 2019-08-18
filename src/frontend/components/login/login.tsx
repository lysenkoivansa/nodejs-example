import React from "react";
import {Component} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import { CardHeader } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {AuthApi, AuthApiRequest} from "../../api/auth-api";
import './login.css';
import {EmployeeApi} from "../../api/employee-api";

export class Login extends Component<LoginProps, LoginState> {
  authApi: AuthApi;
  employeeApi: EmployeeApi;

  constructor(props: LoginProps) {
    super(props);

    this.state = {
      login: '',
      password: '',
      token: '',
      requestCompleted: false,
      error: null
    };

    this.authApi = new AuthApi();
    this.employeeApi = new EmployeeApi();
  }

  handleChange = fieldName => event => this.setState({[fieldName]: event.target.value} as LoginState);

  onSuccessResponse = () => {
    this.props.history.push('/employees');
  };

  onSave = event => {
    event.preventDefault();

    const credentials: AuthApiRequest = {
      login: this.state.login,
      password: this.state.password
    };

    this.authApi.login(credentials)
      .then(({token}) => {
        if (token) {
          sessionStorage.setItem('token', token);
          this.onSuccessResponse();
        }
      });
  };

  render() {
    return (
      <>
        <Card className='login-card'>
          <CardHeader title='Login'/>

          <CardContent>
            <form onSubmit={this.onSave}>
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

              <input type="submit" style={{visibility: 'hidden'}}/>
            </form>
          </CardContent>

          <CardActions>
            <Button size="small" onClick={this.onSave}>Login</Button>
          </CardActions>
        </Card>
      </>
    );
  }
}

interface LoginProps {
  history: any;
}

interface LoginState {
  login: string;
  password: string;
  token: string;
  requestCompleted: boolean;
  error: string | null;
}
