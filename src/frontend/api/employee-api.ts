import {BaseApi} from "./base-api";
import {Employee} from "../interfaces/employee";

export class EmployeeApi extends BaseApi {
  fetchEmployees(): Promise<Employee[]> {
    const mockData: Employee[] = [
      {
        id: 1,
        fullName: 'First',
        idNumber: 1
      },
      {
        id: 2,
        fullName: 'Second',
        idNumber: 2
      },
    ];

    return Promise.resolve(mockData);
  }
}
