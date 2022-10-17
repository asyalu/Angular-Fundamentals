import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: IUser = {
    email: '',
    password: '',
    name: '',
  };
  title: string = 'Login';
  registrationDescription: string = `If you don't have an account you can`;
  registration: string = 'Registration';
  email: string = 'Email';
  password: string = 'Password';
  routerLinkRegistration: string = '/registration';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    this.auth
      .login(this.user)
      .subscribe(() => this.router.navigate(['/courses']));
  }
  ngOnInit(): void {}
}
