// the root module of angular application
// after running npm start/ng serve we bootstrap/kick-start our AppComponent
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component'; // this will import automatically with cli 

// this declarations array contains all the components usedby the application
@NgModule({
  declarations: [
    AppComponent,
    TestComponent // whis will import when running cli
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
