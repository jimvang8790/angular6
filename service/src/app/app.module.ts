import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';// after register EmployeeService in providers, this will import automatically
import { HttpClientModule } from '@angular/common/http'; // import HTTP request

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Dont' forget to add HttpClientModule after import
  ],
  providers: [EmployeeService],// Register Employee Service in order to used this service through out applicaton
  bootstrap: [AppComponent]
})
export class AppModule { }
