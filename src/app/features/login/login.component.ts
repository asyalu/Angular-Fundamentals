import { UserStateFacade } from './../../store/user/user.facade';
import { AuthStateFacade } from './../../store/auth/auth.facade';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

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
  isAuthorized!: Observable<boolean>;

  constructor(
    private authStateFacade: AuthStateFacade,
    private userStateFacade: UserStateFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthorized = this.authStateFacade.isAuthorized$;
  }

  onSubmit(): void {
    this.authStateFacade.login(this.user);
    this.isAuthorized.subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('/courses');
        this.userStateFacade.getCurrentUser();
      }
    });
  }
}
