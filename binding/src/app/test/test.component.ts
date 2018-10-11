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
      <p [class]="successClass">Codevolution</p>
      <!-- What happens when we use both a class attribute and class binding in the same html element -->
      <p [class]="text-special" [class]="successClass">Codevolution</p><!-- text will be green but not italic b.c. a regular class attribute becomes a dummy attribute in the presence of class binding -->
      <!-- apply a class based on an expression that evaluates to be either true/false -->
      <p [class.text-danger]="hasError">Codevolution</p><!-- class."name of the class that we want to conditionally apply"-->
      <!-- since hasError=true, this will result in this class having the class text-danger applied to it -->
      <!-- If you want to conditionally apply multiple classes use ngClass directive -->
      <p [ngClass]="messageClasses">Codevolution</p>
    </div>

    <!-- Style Binding -->
    <div>
      <h2>Style Binding</h2>
      <p [style.color]="'green'">Style Binding</p>
      <!--<p [style.color]="hasError ? 'red' : 'green'">Style Binding 2</p>-->
      <p [style.color]="highlightColor">Style Binding 2</p>
      <!-- style."style attribute -->
      <p [ngStyle]="titleStyles">Style Binding ng style directive</p>
    </div>

    <!-- Event Binding -->
    <div>
      <h2>Event Binding</h2>
      <div>
        <button (click)="onClick($event)">Greet</button>
      </div>
      <div>
        <button (click)="greeting='Welcome JimmiV'">Greet 2</button>
      </div>
      {{greeting}}
    </div>

    <!-- Template Reference Variables -->
    <div>
      <h2>Template Reference Variables</h2>
      <input #myInput type="text"> <!-- # is creating a reference variable followed by a variable name -->
      <button (click)="logMessage(myInput.value)">Log</button>
    </div>

    <!-- Two Way Binding -->
    <!-- It is essential that your model and the view are always in sync otherwise data might not be consistent -->
    <div>
      <h2>Two Way Binding</h2>
      <!-- the [] for property binding, which is data flow from the class to the template -->
      <!-- the () for event binding, so the data flow from the template to the class -->
      <!-- there is two way data flow, hence two-way data binding -->
      <input [(ngModel)]="name2" type="text" placeholder="enter name"> <!-- import FormsModule into app.module.ts to use ngModel -->
      <p>Two-Way Binding shown here: {{name2}}</p> 
      <!-- What we want here is that when something is typed in the input box, 
          we want the property (name2 = '') to be updated with this vaule 
          and display with interpolation {{}} -->
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
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError, // b.c hasError is false this is true
    'text-danger': this.hasError, // b.c hasError is false this is false
    'text-special': this.isSpecial // b.c isSpecial is true this is true
  }

  // Style Binding
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic' // no snake-case only camelCase
  }

  // Event Binding
  public greeting = '';

  // Two Way Binding 
  public name2 = '';

  constructor() { }

  ngOnInit() {
  }

  // Interpolation
  // a method defined in the component class
  greetUsers() {
    return 'Hello ' + this.name;
  }

  // Event Binding
  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }

  // Template Reference Variables
  logMessage(value) {
    console.log(value)
  }

}
