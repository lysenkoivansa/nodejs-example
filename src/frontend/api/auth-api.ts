import {BaseApi} from "./base-api";

declare const AUTH_HOST: string;

export class AuthApi extends BaseApi {
  login(credentials: AuthApiRequest): Promise<AuthApiResponse> {
    return this.fetch(AUTH_HOST, credentials)
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
