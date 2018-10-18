// the getEmployee() method in employess.service.ts file the observable needs to be cast into a format that represents an array of employesss
// so for that let's first create an employee interface 
export interface IEmployee {
    id: number,
    name: string,
    age: number
} 
// we now have an employee type that the obervable can be cast into and go back to employee.service.ts and add a type to the get request
// that will be an array fo IEmployee and also make sure to import IEmployee
// the get employees method will return an observable of type employee array and make sure to import obervable from rxjs  