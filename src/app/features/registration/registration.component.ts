import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user: { email: string; password: string; name: string } = {
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
  constructor() {}

  ngOnInit(): void {}
}
