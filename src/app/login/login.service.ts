import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnInit {
  //to local storage
  public logInOutEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (localStorage.getItem('signedIn') == null)
      localStorage.setItem('signedIn', 'true');
  }

  login(username: string, password: string) {
    //put this back down
    let employee = this.databaseService.signIn(username, password);
    if (employee != undefined) {
      console.log('Succeded in signing in');
      localStorage.setItem('signedIn', 'true');
      setTimeout(() => {
        this.router.navigate([
          this.route.snapshot.queryParamMap.has('returnUrl')
            ? this.route.snapshot.queryParamMap.get('returnUrl')
            : 'employees',
        ]);
      });
      this.logInOutEvent.emit();
      return true;
    }
    return false;
  }

  logout() {
    localStorage.setItem('signedIn', 'false');
    this.logInOutEvent.emit();
    this.router.navigate(['/login']);
  }

  isSignedIn() {
    return localStorage.getItem('signedIn') == 'true';
  }
}
