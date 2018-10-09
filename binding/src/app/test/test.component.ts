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
      <!-- binding to the ID property of this input element hence property binding -->
      <input [id]="myId" type="text" placeholder="enter text">
      <!-- can use interpolation to bind to the ID of the element -->
      <input id="{{myId}}" type="text" placeholder="enter text">
      <!-- So why use property binding? B.c. interpolation can only work with string values and there are 
      HTML properties that are boolean properties that may need to sometimes bind to -->
      <input disabled="false" id="{{myId}}" type="text" placeholder="enter text"> <!-- even if disable = false, input is still disable-->
      <!-- by default disable = true, interpolation won't work on boolean, property binding will work for boolean -->
      <input [disabled]="isDisabled" id="{{myId}}" type="text" placeholder="enter text">  
      <input bind-disabled="isDisabled" id="{{myId}}" type="text" placeholder="enter text"> <!-- another way of property binding -->  
    </div>

    <!-- Class Binding -->
    <div>
      <h2>Class Binding</h2>
      <p class="text-success">Codevolution</p>
    </div>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  // Interpolation
  // another limitation is access to global variables ex: window screen
  // but you can do it in the class and then bind it to the template
  public siteUrl = window.location.href;
  // public is similar to var, where var name = 'Jim Vang';
  public name = 'Jim Vang';

  // Property Binding
  public myId = 'testId';
  public isDisabled = true;

  // Class Binding


  constructor() { }

  ngOnInit() {
  }

  // Interpolation
  // a method defined in the component class
  greetUsers() {
    return 'Hello ' + this.name;
  }

}
