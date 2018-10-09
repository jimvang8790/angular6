// root component of angular application
// app.component.ts has 2 major function
// 1) HTML template
// 2) class to control the view logic(the typescript file)
import { Component } from '@angular/core';

// Metadata attached in the form of a decorator(the Component decorator)
// the Component decorator is basically a function that attaches to the class right below it which is the AppComponent class
// and it is this decorator that tells angular this is not a plane class this is a component
// the Component decorator contains both the Metadata and the template which represents the view 
@Component({
  selector: 'app-root', // a custom html tag that can be use to represent this component <app-root></app-root>
  templateUrl: './app.component.html', // points to the html file that represent the view for this component
  styleUrls: ['./app.component.css'] // this is style that only style this component
})
// this class(AppComponent) contains one property which is the tittle
// and no methods
export class AppComponent {
  title = 'Angular 6';
}
