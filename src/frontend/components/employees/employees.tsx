import React from "react";
import {Component} from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Paper} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {Employee} from "../../interfaces/employee";
import {EmployeeApi} from "../../api/employee-api";

export class Employees extends Component<{}, EmployeesState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    const employeeApi = new EmployeeApi();
    const token = sessionStorage.getItem('token');

    employeeApi.fetchEmployees(token || '')
      .then(employees => this.setState({employees}))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>ID Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.employees.map(employee => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.full_name}</TableCell>
                <TableCell>{employee.id_number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

interface EmployeesState {
  employees: Employee[];
}
