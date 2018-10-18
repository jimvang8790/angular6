import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service'; // this will import automatically once declare employeeService in constructor function

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee's Details</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - Age: {{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  // b.c of the servce initialize the employee array to an empty array
  public employees = [];

  // declare employeeService as dependency 
  constructor(private _employeeService: EmployeeService) { }

  // after declare employeeService, make use of the service instance and fetch the employee data that goes inside the ng on it life cycle hook
  // ngOnInit hooks gets called once the component has been initialized
  ngOnInit() {
    // the 3rd step of http 
    // we are going to call the getEmployees() method and the subscribe to the observable so remove the assignment this.employees = 
    // now instead we are going to subscribe to the observable returned by the getEmployee() 
    // do the same with employee-list.component.ts file
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data); 
  }

}
