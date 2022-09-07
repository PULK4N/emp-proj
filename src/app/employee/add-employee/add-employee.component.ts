import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Employee, ValidEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import {
  EMAIL_REGEX,
  FIRST_NAME_REGEX,
  LAST_NAME_REGEX,
  PASSWORD_REGEX,
  POSITION_REGEX,
  SECURITY_NUMBER_REGEX,
  USERNAME_REGEX,
} from '../../shared/InputRegex';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  private usernameObserverable: Observable<string> | null = null;
  private passwordObserverable: Observable<string> | null = null;
  private repeatPasswordObserverable: Observable<string> | null = null;
  private emailObserverable: Observable<string> | null = null;
  private ageObserverable: Observable<string> | null = null;
  private positionObserverable: Observable<string> | null = null;
  private securityNumberObserverable: Observable<number> | null = null;
  private firstNameObserverable: Observable<string> | null = null;
  private lastNameObserverable: Observable<string> | null = null;

  // does not work
  @Input()
  public validEmployee: ValidEmployee = new ValidEmployee();

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
  public age: string = '';
  @Input()
  public position: string = '';
  @Input()
  public email: string = '';
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('I was here');
    this.usernameObserverable = new Observable((observer) => {
      observer.next(this.username);
      observer.complete();
    });

    this.passwordObserverable = new Observable((observer) => {
      observer.next(this.password);
      observer.complete();
    });

    this.ageObserverable = new Observable((observer) => {
      observer.next(this.age);
      observer.complete();
    });

    this.repeatPasswordObserverable = new Observable((observer) => {
      observer.next(this.repeatPassword);
      observer.complete();
    });

    this.firstNameObserverable = new Observable((observer) => {
      observer.next(this.firstName);
      observer.complete();
    });

    this.lastNameObserverable = new Observable((observer) => {
      observer.next(this.lastName);
      observer.complete();
    });

    this.securityNumberObserverable = new Observable((observer) => {
      observer.next(this.securityNumber);
      observer.complete();
    });

    this.emailObserverable = new Observable((observer) => {
      observer.next(this.email);
      observer.complete();
    });

    this.positionObserverable = new Observable((observer) => {
      observer.next(this.position);
      observer.complete();
    });
  }

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
    this.employeeService.addEmployee(emp);
    this.successfullyCreated = true;
    setTimeout(() => {
      this.router.navigate(['/employees']);
    }, 800);
  }

  validateUsername(event: Event) {
    if (this.usernameObserverable)
      this.usernameObserverable.subscribe((username: string) => {
        this.validEmployee.validUsername = !USERNAME_REGEX.test(username);
      });
  }

  validatePassword(event: Event) {
    this.passwordObserverable?.subscribe(() => {
      this.validEmployee.validPassword = !PASSWORD_REGEX.test(this.password);
    });
  }

  validateRepeatPassword(event: Event) {
    this.repeatPasswordObserverable?.subscribe(() => {
      this.validEmployee.validRepeatPassword = !(
        this.password == this.repeatPassword
      );
    });
  }

  validateFirstName(event: Event) {
    this.firstNameObserverable?.subscribe(() => {
      this.validEmployee.validFirstName = !FIRST_NAME_REGEX.test(
        this.firstName
      );
    });
  }

  validateLastName(event: Event) {
    this.lastNameObserverable?.subscribe(() => {
      this.validEmployee.validLastName = !LAST_NAME_REGEX.test(this.lastName);
    });
  }

  validateAge(event: Event) {
    this.ageObserverable?.subscribe(() => {
      this.validEmployee.validAge = !((Number(this.age) > 0) && Number(this.age) < 120);
    });
  }

  validatePosition(event: Event) {
    this.positionObserverable?.subscribe(() => {
      this.validEmployee.validPosition = !POSITION_REGEX.test(this.position);
    });
  }

  validateSecurityNumber(event: Event) {
    this.securityNumberObserverable?.subscribe(() => {
      this.validEmployee.validSecurityNumber = !SECURITY_NUMBER_REGEX.test(
        String(this.securityNumber)
      );
    });
  }

  validateEmail(event: Event) {
    this.emailObserverable?.subscribe(() => {
      this.validEmployee.validEmail = !EMAIL_REGEX.test(this.email);
    });
  }

  setAge(event:Event){
    this.age = this.employeeService.calculateAge(this.birthDate);
  }
}
