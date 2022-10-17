import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user: IUser = {
    email: '',
    password: '',
    name: '',
  };
  title: string = 'Registration';
  registrationDescription: string = `If you don't have an account you can`;
  email: string = 'Email';
  login: string = 'Login';
  password: string = 'Password';
  name: string = 'Name';

  ngOnInit(): void {}
}
