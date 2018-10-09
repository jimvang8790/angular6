import { Component, OnInit } from '@angular/core';

@Component({
  // There are 2 other ways of writing a selector
  // 1) selector can be classes, ex: selector: '.app-test',
  // 2) selector can be in square brackets, es: selector: '[app-test],
  selector: 'app-test',
  // to have the template not inline use the following, ex: templateUrl: './test.component.html',
  // and then write the template in the test.component.html file
  // code below this will have the template inline using back ticks ( `` )
  template: `<div>Inline Template</div>`,  
  // can have the style pointing to the test.component.css by, ex: styleUrls: ['./test.component.css']
  // same steps as the inline template
  styles: [`
    div {
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
