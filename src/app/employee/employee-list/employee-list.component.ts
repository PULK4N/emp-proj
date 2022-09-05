import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  private subscriptions: any[] = [];
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.employeeService.updatedEmployees.subscribe(
      () => (this.employees = this.employeeService.getEmployees())
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => {
      x.unsubscribe();
    });
  }
}
