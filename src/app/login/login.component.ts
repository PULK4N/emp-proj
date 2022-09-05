import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input()
  username: string = '';
  @Input()
  password: string = '';
  failed: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSignIn() {
    this.failed = !this.loginService.login(this.username, this.password);
  }
}
