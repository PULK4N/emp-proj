import { Injectable, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService implements OnInit {
  employees: Employee[] = [];
  constructor(private databaseService: DatabaseService) {}
  ngOnInit(): void {
    this.employees = this.getEmployees();
  }
  getEmployees(): Employee[] {
    this.employees = this.databaseService.getEmployees();
    return this.employees;
  }

  getEmployee(id: number): Employee | undefined {
    return this.databaseService.getEmployee(id);
  }

  addEmployee(username: string, password: string, employee: Employee): void {
    this.databaseService.addEmployee(username, password, employee);
  }

  editEmployee(id: number, employee: Employee) {
    this.databaseService.editEmployee(id, employee);
  }

  deleteEmployee(id: number) {
    this.databaseService.deleteEmployee(id);
  }
}
