// The purpose of this service is to provide the employess' data
// 1) Define the EmployeeService Class
// 2) Register EmployeeService in providers array in app.module.ts with angular injector in order to use this service globally
// 3) Declare as dependency in EmpDetail
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // this will import automatically after declaring in constructor
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // so because we are using a json file with employee data, we'll create a private _url string linking to the jason file
  // and in the get request return this.http.get() use this as the url
  private _url: string = "/assets/data/employees.json"

  // declare Http as a dependency in the constructor after importing it in app.module.ts
  // after declaring, we now have a local variable HTTP which we can use to refer to an instance of HTTP Client
  // we are now ready to make a get request to fetch data using HTTP, so in the getEmployees() let's make a request
  constructor(private http: HttpClient) { }

  // create a new method called getEmployee and return the array of employee
  getEmployees(): Observable<IEmployee[]>{
    // the get request takes in a URL as its argument but since we don't have a server yet let's fetch the data from a file which we assume to be on a web server
    // so within the assets folder create a data folder and a employees.json file
    // if we do have a working web server just replace the _url with the web url
    // create a obervable interface called employee.ts in the app folder
    return this.http.get<IEmployee[]>(this._url);
  }
}
