import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { Inscriptions } from 'src/app/shared/enums/enums';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
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
  routerLinkLogin: string = '/login';
  isRequired: Inscriptions = Inscriptions.isRequired;

  submit(): void {}
}
