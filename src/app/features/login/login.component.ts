import { IUser } from 'src/app/shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Inscriptions } from 'src/app/shared/enums/enums';

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
  isRequired: Inscriptions = Inscriptions.isRequired;

  ngOnInit(): void {}
}
