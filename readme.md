# Angular 6

## What and Why
    Framework to build client side application
    Great for SPAs

    - Modular Approach
    - Re-usable code
    - Development quicker and easier
    - Unit testable
    - Google + Microsoft

## Creating an Angular 6 project
    0) to run angular project $ng serve --open
    1) creating a new project folder $ng new "name of project"
    2) creating a new component $ng g c "name of component
    3) creating a new component is inline template(html) and inline style $ng g c "name of component" -it -is

## Angular Version Changes
    - Upgrade twice a year
    - Semantic Versioning
        - ex: version 1.2.3 => version major.minor.fix(patch)
            - major = increases when there are any break in the functionalities and              major number increases twice a year 
            - minor = increases when there are added features that don't break any                functionality
            - fix(patch) = increases anything there is a bug fix or a patch

## Architecture Summary
    - Angular App - one or more modules
        - Module - one or more components and services
        - Module - interact and ultimately render the view in the browser
            - Components - HTML + CSS
            - Services - Business Logic of the Module

## Component
    - A component is made up of 3 parts
        1) Template which repersent the view created using HTML
        2) Class which are codes that support the view created using Typescript class contains data properties and methods used to control the logic of the view, ex: can have a method to show/hide and element based on the value of a property
        3) Metadata which is the information that angular decides if the particular is an angular component or just a regular class. Metadata is defind using a decorator which is a feature in typescript and a decorator is just a function that provides information about the class attached to it. And for component we use the component decorator 

## Attribute vs Property
    - Attribute and Properties are not the same
    - Attribute = define by HTML
    - Properties = define by DOM (Document Object Model)
    - Attribute initialize DOM properties and then they are done. Attribute values cannot change once they are initialized
    - Properties values however can change

## Structure Directives
    - Add or remove HTML elements
        - *ngIf = contitionally render HTML elements
        - *ngSwitch = contitionally render HTML elements
        - *ngFor = render a list of HTML elements

## Component Interaction
    - Parent = AppComponent
    - Child = TestComponent
        - Using the @Input() decorator the child can accept input from the parent
        - Using the @Output() decorator the child can send out events to the parent

## Service
    - A Service is a class with specific purpose
    - Why Service?
        1) Share data between multiple components
        2) Implement spplication logic
        3) External Interaction 
    - Name convention
        - .service.ts

## Dependency Injection
    - Code without DI - drawback
    - DI as a design
    - DI is a coding pattern in which a class receives its dependencies from external sources rather than creating them itself
    - DI as a framework
        1) Define the EmployeeService class
        2) Register with injector
        3) Declare as dependency in EmpDetail

## Observables
    - A sequence of items that arrive asynchronously over time
    - HTTP call - single item
    - Single item (not a sequence) - HTTP response 


## HTTP, Observables, and RxJS
    1) HTTP Get request from EmpService
    2) Receive the observable and cast it into an employee array
    3) Subscribe to the observable from EmpList and EmpDetail
    4) Assign the employee array to a local variable
    - RxJS
        - Reactive Extensions for Javascript
        - External library to work with Observables


## Routing in Angular
    0) $ng new routing-demo - -route the - -route is what creates the router
    1) Generate a project with routing option
    2) Generate departmentList and employeeList components
    3) Configure the routes
    4) Add buttons and use directives to navigate pages