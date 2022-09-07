import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, timeout } from 'rxjs';
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
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  @Input()
  public validEmployee: ValidEmployee = new ValidEmployee();
  private emailObserverable: Observable<string> | null = null;
  private ageObserverable: Observable<string> | null = null;
  private positionObserverable: Observable<string> | null = null;
  private securityNumberObserverable: Observable<number> | null = null;
  private firstNameObserverable: Observable<string> | null = null;
  private lastNameObserverable: Observable<string> | null = null;

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
  public age: string = '';
  @Input()
  public position: string = '';
  @Input()
  public email: string = '';
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editEmployee() {
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

  ngOnInit(): void {
    let emp = this.employeeService.getEmployee(
      this.route.snapshot.params['id']
    );
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

    this.ageObserverable = new Observable((observer) => {
      observer.next(this.age);
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
    console.log("I was here");
    
    this.age = this.employeeService.calculateAge(this.birthDate);
  }
}
