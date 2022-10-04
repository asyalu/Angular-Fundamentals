import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: { email: string; password: string } = {
    email: '',
    password: '',
  };
  title: string = 'Login';
  registrationDescription: string = `If you don't have an account you can`;
  registration: string = 'Registration';
  email: string = 'Email';
  password: string = 'Password';
  constructor() {}

  ngOnInit(): void {}
}
