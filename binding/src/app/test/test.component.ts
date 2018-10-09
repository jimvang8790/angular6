import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>This will go through binding and interpolation</p>

    <!-- Interpolation -->
    <!-- the {{}} is known as interpolation in angular -->
    <div>
      <h2>Interpolation</h2>
      <p>Welcome {{name}}</p> 
      <p>{{2+2}}</p>
      <p>{{"Welcome " + name}}</p>
      <p>Length of the name and spaces = {{name.length}}</p>
      <p>Uppercase name = {{name.toUpperCase()}}</p>
      <p>Interpolating to display a method: {{greetUsers()}}</p>
      <!-- Binding cannot contain assignments ex: below -->
      <!-- <p>{{a = 2+2}}</p>-->
      <p>Grabbing window screen in a class and then binding it: {{siteUrl}}</p>
    </div>

    <!-- Property Binding -->
    <div>
      <h2>Property Binding</h2>
      <p>Welcome {{name}}</p>
      <input type="text" value="Jimmi">
    </div>
  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {

  // Interpolation
  // another limitation is access to global variables ex: window screen
  // but you can do it in the class and then bind it to the template
  public siteUrl = window.location.href;
  // public is similar to var, where var name = 'Jim Vang';
  public name = 'Jim Vang';

  constructor() { }

  ngOnInit() {
  }

  // Interpolation
  // a method defined in the component class
  greetUsers() {
    return 'Hello ' + this.name;
  }

}
