// The purpose of this service is to provide the employess' data
// 1) Define the EmployeeService Class
// 2) Register EmployeeService in providers array in app.module.ts with angular injector in order to use this service globally
// 3) Declare as dependency in EmpDetail
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  // create a new method called getEmployee and return the array of employee
  getEmployees() {
    return [
      {'id': 1, 'name': 'Andrew', 'age': 30},
      {'id': 2, 'name': 'Brandon', 'age': 25},
      {'id': 3, 'name': 'Christina', 'age': 26},
      {'id': 4, 'name': 'elena', 'age': 28}
    ];
  }
}
