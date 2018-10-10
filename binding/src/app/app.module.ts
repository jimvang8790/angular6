import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // import FormsModule to use ngModel for two-way binding

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // import FormsModule here as well
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
