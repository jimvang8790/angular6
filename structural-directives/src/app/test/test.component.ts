import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <!-- Structure Directives (*ngIf) -->
    <div>
      <h2>Structure Directives (*ngIf)</h2>
      
      <!-- Another way of *ngIf -->
      <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
      <ng-template #thenBlock>
        <h2>Show</h2>
      </ng-template>
      <ng-template #elseBlock>
        <h2>Hidden</h2>
      </ng-template>
    </div>

    <!-- Structure Directive (*ngSwitch) -->
    <div>
      <h2>Structure Directive (*ngSwitch)</h2>
      <div [ngSwitch]="color2">
        <p *ngSwitchCase="'red'">You picked the color red</p>
        <p *ngSwitchCase="'blue'">You picked the color blue</p>
        <p *ngSwitchCase="'green'">You picked the color green</p>
        <p *ngSwitchDefault>Pick Again</p>
      </div>
    </div>

    <!-- Structure Directive (*ngFor) -->
    <div>
      <h2>Structure Directive (*ngFor)</h2>
      <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
      <p>{{i}} {{color}} {{f}} {{l}} {{o}} {{e}}</p>
      </div>
    </div>

    <!-- Component Interaction -->
    <div>
    <h2>Component Interaction</h2>
    <div>
    <!-- <p>{{"Hello " + parentData}}</p>-->
      <p>{{"Hello " + name3}}</p>
      <button (click)="fireEvent()">Send Event</button>
    </div>
    </div>

    <!-- Pipes -->
    <div>
      <h2>Pipe = |</h2>
      <div>
        <p>No pipe: {{ name4 }}</p>
        <p>name | lowercase = {{name4 | lowercase}}</p>
        <p>name | uppercase = {{name4 | uppercase}}</p>
        <p>message | titlecase = {{message | titlecase}}</p>
        <h3>slice:"start at":"up to but not including"</h3>
        <p>name | slice:3 = {{name4 | slice:3}}</p> <!-- slice:"#start at" -->
        <p>name | slice:3:5 = {{name4 | slice:3:5}}</p><!-- slice:"#start at:#up to but not including"-->
        <p>pserson | json = {{person | json}}</p>
        <h3>MaxDigitBeforeDecimal.MinDigitAfterDecimal-MaxDigitAfterDecimal</h3>
        <p>5.678 | 1.2-3 = {{5.678 | number:'1.2-3'}}</p>
        <p>5.678 | 3.4-5 = {{5.678 | number:'3.4-5'}}</p>
        <p>5.678 | 3.1-2 = {{5.678 | number:'3.1-2'}}</p>
        <h3>Percentage & Currency</h3>
        <p>number | percent = {{0.25 | percent}}</p>
        <p>number | currency = {{0.25 | currency}}</p>
        <p>number | currency: 'GBP' = {{0.25 | currency: 'GBP'}}</p>
        <p>number | currency: 'GBP': 'code' = {{0.25 | currency: 'GBP': 'code'}}</p>
        <p>number | currency: 'EUR' = {{0.25 | currency: 'EUR'}}</p>
        <p>number | currency: 'EUR': 'code' = {{0.25 | currency: 'EUR': 'code'}}</p>
        <h3>Dates</h3>
        <p>Date = {{date}}</p>
        <p>date | date:'short' = {{date | date:'short'}}</p>
        <p>date | date:'shortDate' = {{date | date:'shortDate'}}</p>
        <p>date | date:'shortTime' = {{date | date:'shortTime'}}</p>
        <p>date | date:'long' = {{date | date:'long'}}</p>
        <p>date | date:'longDate' = {{date | date:'longDate'}}</p>
        <p>date | date:'longTime' = {{date | date:'longTime'}}</p>
      </div>
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  // Structure Directives (*ngIf)
  displayName = true;
  // displayName = false; Uncomment this to see "Name is hidden"

  // Structure Directives (*ngSwitch)
  public color2 = 'blue';

  // Structure Directives (*ngFor)
  public colors = ['red', 'blue', 'green', 'yellow'];

  // Component Interaction
  // @Input() public parentData;
  // add component interaction to app.component.ts file
  @Input('parentData') public name3; // import Input from @angular/core, input is the parent sending data to the child
  @Output() public childEvent = new EventEmitter(); // import Output & EventEmitter from @angular/core, output is the child sending data to the parent 

  // Pipes
  public name4 = 'Codevolution Angular6 Pipes';
  public message = 'Welcome to Codevolution Angular6 Pipes';
  public person = {
    'firstName': 'John',
    'lastName': 'Doe'
  }
  public date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

  // Component Interaction
  fireEvent() {
  this.childEvent.emit('Hey Codevolution Childevent');
  }

}
