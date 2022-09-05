import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService implements OnInit {
  employees: Employee[] = [];
  public updatedEmployees: EventEmitter<void> = new EventEmitter(true);
  constructor(private databaseService: DatabaseService) {}
  ngOnInit(): void {
    this.employees = this.getEmployees();
  }
  getEmployees(): Employee[] {
    this.employees = this.databaseService.getEmployees();

    // const user = this.employees.find(x => x.firstName == 'igor')
    // const searchedList = this.employees.filter(x => x.email.includes(param))

    return this.employees;
  }

  getEmployee(id: number): Employee | undefined {
    return this.databaseService.getEmployee(id);
  }

  addEmployee(employee: Employee): void {
    this.databaseService.addEmployee(employee);
  }

  editEmployee(id: number, employee: Employee) {
    this.databaseService.editEmployee(id, employee);
  }

  deleteEmployee(id: number) {
    this.databaseService.deleteEmployee(id);
    this.updatedEmployees.emit();
  }
}
