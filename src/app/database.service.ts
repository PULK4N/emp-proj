import { Injectable } from '@angular/core';
import { Employee } from './employee/employee';

type passEmp = { password: string; employee: Employee };

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private employeesDB: Map<string, passEmp> = new Map<string, passEmp>();
  private lastIndex: number = 0;

  constructor() {
    let emp0 = new Employee(
      'Nikola',
      'Tasmanic',
      new Date('01.01.1999'),
      0,
      0,
      'test',
      'test'
    );
    let emp1 = new Employee(
      'George',
      'Rogger',
      new Date('01.02.1999'),
      0,
      0,
      'test',
      'test'
    );
    let emp2 = new Employee(
      'George3',
      'Martinovic',
      new Date('01.01.1999'),
      0,
      0,
      'Test',
      'test2'
    );
    emp0.id = this.lastIndex++;
    emp1.id = this.lastIndex++;
    emp2.id = this.lastIndex++;

    this.employeesDB.set('nikola', {
      password: 'nikola',
      employee: emp0,
    });

    this.employeesDB.set('George', {
      password: 'nikola',
      employee: emp1,
    });

    this.employeesDB.set('George3', {
      password: 'nikola',
      employee: emp2,
    });
  }

  signIn(username: string, password: string) {
    if (this.employeesDB.has(username)) {
      let employeeData = this.employeesDB.get(username);
      if (employeeData?.password == password) {
        return employeeData.employee;
      }
    }
    return undefined;
  }

  getEmployees(): Employee[] {
    const employees: Employee[] = [];
    this.employeesDB.forEach((value: passEmp, key: string) => {
      employees.push(value.employee);
    });
    return employees;
  }

  getEmployee(id: number): Employee | undefined {
    let emp = undefined;
    this.employeesDB.forEach((value: passEmp, key: string) => {
      if (id == value.employee.id) emp = value.employee;
    });
    return emp;
  }

  addEmployee(username: string, password: string, employee: Employee): void {
    employee.id = this.lastIndex++;
    this.employeesDB.set(username, { password, employee });
  }

  editEmployee(id: number, employee: Employee) {
    const emp = this.getEmployee(id);
    console.log(emp);
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
    this.employeesDB.forEach((value: passEmp, key: string) => {
      if (value.employee.id == id) {
        this.employeesDB.delete(key);
        console.log('I deleted');
      }
    });
  }
}
