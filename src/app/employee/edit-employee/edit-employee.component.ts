import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { timeout } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  @Input()
  successfullyEdited: boolean = false;
  public emp: Employee = new Employee();
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let emp = this.employeeService.getEmployee(
      this.route.snapshot.params['id']
    );
    console.log(emp);
    if (emp == undefined) this.router.navigate(['/employees']);
    else {
      this.emp = emp;
      this.firstName = emp.firstName;
      this.lastName = emp.lastName;
      this.age = emp.age;
      this.birthDate = emp.birthDate;
      this.email = emp.email;
      this.position = emp.position;
    }
  }

  editEmployee() {
    console.log(this.emp);
    this.emp.firstName = this.firstName;
    this.emp.lastName = this.lastName;
    this.emp.birthDate = this.birthDate;
    this.emp.securityNumber = this.securityNumber;
    this.emp.age = this.age;
    this.emp.position = this.position;
    this.emp.email = this.email;
    this.employeeService.editEmployee(this.emp.id, this.emp);
    this.successfullyEdited = true;
    setTimeout(() => {
      this.router.navigate(['/employees']);
    }, 800);
  }
}
