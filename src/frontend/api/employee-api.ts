import {BaseApi} from "./base-api";
import {Employee} from "../interfaces/employee";

export class EmployeeApi extends BaseApi {
  fetchEmployees(token: string): Promise<Employee[]> {
      return this.fetch('/employee', {token}).then(res => res.json());
  }
}
