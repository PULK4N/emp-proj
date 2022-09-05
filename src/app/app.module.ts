import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeItemComponent } from './employee/employee-list/employee-item/employee-item.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login/login.service';
import { AuthGuardService } from './auth-guard.service';
import { DatabaseService } from './database.service';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { RefreshComponent } from './shared/refresh/refresh.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InputValidatorsDirective } from './shared/input-validators.directive';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    RefreshComponent,
    NavbarComponent,
    InputValidatorsDirective,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [LoginService, DatabaseService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
