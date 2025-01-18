import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,

  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {


  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  onLogin(): void {
    this.authService.login('rey', '123')
      .subscribe( user => {
        this.router.navigate(['/']);
      }
    );
  }
}
