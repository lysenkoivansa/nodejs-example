import {BaseApi} from "./base-api";
import {AUTH_HOST} from "../constants/api";

export class AuthApi extends BaseApi {
  private _authHost = AUTH_HOST;

  login(credentials: AuthApiRequest): Promise<AuthApiResponse> {
    return this.fetch(`${this._authHost}/token`, credentials)
      .then(res => res.json());
  }
}

export interface AuthApiRequest {
  login: string;
  password: string;
}

export interface AuthApiResponse {
  message: string;
}
