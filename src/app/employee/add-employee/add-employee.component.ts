import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  successfullyCreated: boolean = false;
  @Input()
  public username: string = 'test';
  @Input()
  public password: string = '';
  @Input()
  public repeatPassword: string = '';
  @Input()
  public firstName: string = '';
  @Input()
  public lastName: string = '';
  @Input()
  public birthDate: Date = new Date('01.01.1999');
  @Input()
  public securityNumber: number = 0;
  @Input()
  public age: number = 0;
  @Input()
  public position: string = '';
  @Input()
  public email: string = '';
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createEmployee() {
    const emp: Employee = new Employee(
      0,
      this.username,
      this.password,
      this.firstName,
      this.lastName,
      this.birthDate,
      this.securityNumber,
      this.age,
      this.position,
      this.email
    );
    this.employeeService.addEmployee(this.username, this.password, emp);
    this.successfullyCreated = true;
    setTimeout(() => {
      this.router.navigate(['/employees']);
    }, 800);
  }
}
