import {BaseApi} from "./base-api";

export class AuthApi extends BaseApi {
  login(credentials: AuthApiRequest): Promise<AuthApiResponse> {
    return this.fetch('/auth/token', credentials).then(res => res.json());
  }
}

export interface AuthApiRequest {
  login: string;
  password: string;
}

export interface AuthApiResponse {
  token: string;
  Error: string;
}
