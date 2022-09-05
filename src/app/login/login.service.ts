import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //to local storage
  private signedIn: boolean = false;

  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  login(username: string, password: string) {
    //put this back down
    let employee = this.databaseService.signIn(username, password);
    if (employee != undefined) {
      console.log('Succeded in signing in');
      this.signedIn = true;
      setTimeout(() => {
        this.router.navigate([
          this.route.snapshot.queryParamMap.has('returnUrl')
            ? this.route.snapshot.queryParamMap.get('returnUrl')
            : 'employees',
        ]);
      }, 800);
      return true;
    }
    return false;
  }

  logout() {
    this.signedIn = false;
  }

  isSignedIn() {
    return this.signedIn;
  }
}
