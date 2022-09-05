import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subscriptions: any[] = [];
  @Input()
  singedIn: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.loginService.logInOutEvent.subscribe(() => {
        this.singedIn = this.loginService.isSignedIn();
      })
    );
    this.singedIn = this.loginService.isSignedIn();
  }

  signOut(): void {
    this.loginService.logout();
    this.singedIn = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }
}
