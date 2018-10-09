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
        2) Class which are codes that support the view created using Typescript
            class contains data properties and methods used to control the logic of the view, ex: can have a method to show/hide and element based on the value of a property
        3) Metadata which is the information that angular decides if the particular is    an angular component or just a regular class. Metadata is defind using a       decorator which is a feature in typescript and a decorator is just a           function that provides information about the class attached to it. And for     component we use the component decorator 

## Attribute vs Property
    - Attribute and Properties are not the same
    - Attribute = define by HTML
    - Properties = define by DOM (Document Object Model)
    - Attribute initialize DOM properties and then they are done. Attribute values cannot change once they    are initialized
    - Properties values however can change