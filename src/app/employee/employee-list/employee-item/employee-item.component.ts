import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css'],
})
export class EmployeeItemComponent implements OnInit {
  @Input()
  username: string = '';
  @Input()
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onDelete() {
    //const id: number = this.route.snapshot.params['id'];
    this.employeeService.deleteEmployee(this.employee.id);
    // this.router
    //   .navigateByUrl('/refresh', { skipLocationChange: true })
    //   .then(() => {
    //     this.router.navigate(['employees']);
    //   });
  }

  getAge() {
    var today = new Date();
    var birthDate = this.employee.birthDate;
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
