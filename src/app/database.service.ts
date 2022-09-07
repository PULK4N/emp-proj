import { EventEmitter, Injectable } from '@angular/core';
import { Employee } from './employee/employee';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private employees = [
    new Employee(
      0,
      'nikola',
      'nikola',
      'Nikola',
      'Tasmanic',
      new Date('01.01.1999'),
      0,
      '',
      'test',
      'test'
    ),
    new Employee(
      1,
      'marko',
      'marko',
      'George',
      'Rogger',
      new Date('01.02.1999'),
      0,
      '',
      'test',
      'test'
    ),
    new Employee(
      2,
      'jovan',
      'jovan',
      'George3',
      'Martinovic',
      new Date('01.01.1999'),
      0,
      '',
      'Test',
      'test2'
    ),
  ];
  private lastIndex: number = 2;

  constructor() {}

  signIn(username: string, password: string) {
    const employee = this.employees.find(
      (x) => x.username == username && x.password == password
    );
    return employee;
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee(id: number): Employee | undefined {
    return this.employees.find((x) => x.id == id);
  }

  addEmployee(employee: Employee): void {
    employee.id = ++this.lastIndex;
    this.employees.push(employee);
  }

  editEmployee(id: number, employee: Employee) {
    const emp = this.getEmployee(id);
    if (emp) {
      emp.firstName = employee.firstName;
      emp.lastName = employee.lastName;
      emp.birthDate = employee.birthDate;
      emp.securityNumber = employee.securityNumber;
      emp.age = employee.age;
      emp.position = employee.position;
      emp.email = employee.email;
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter((emp) => {
      return emp.id !== id;
    });
  }
}
