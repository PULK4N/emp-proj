import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { RefreshComponent } from './shared/refresh/refresh.component';

const appRoutes: Routes = [
  {
    path: 'add-employee',
    canActivate: [AuthGuardService],
    component: AddEmployeeComponent,
  },
  {
    path: 'employees/:id/edit',
    component: EditEmployeeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'employees',
    canActivate: [AuthGuardService],
    component: EmployeeListComponent,
  },
  {
    path: 'employee-details',
    canActivate: [AuthGuardService],
    component: EmployeeComponent,
  },
  { path: 'login', component: LoginComponent },

  { path: 'refresh', component: RefreshComponent },
  { path: '**', redirectTo: '/employees' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
