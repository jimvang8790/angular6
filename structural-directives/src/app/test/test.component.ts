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

  constructor() { }

  ngOnInit() {
  }

  // Component Interaction
  fireEvent() {
  this.childEvent.emit('Hey Codevolution Childevent');
  }

}
