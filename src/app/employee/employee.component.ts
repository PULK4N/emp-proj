import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timeout } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    //this.firstSubscription.unsubscribe();
  }
}
