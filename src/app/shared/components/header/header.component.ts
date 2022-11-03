import { UserStateFacade } from './../../../store/user/user.facade';
import { AuthStateFacade } from './../../../store/auth/auth.facade';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private authStateFacade: AuthStateFacade,
    private userStateFacade: UserStateFacade
  ) {
    this.authStateFacade.isAuthorized$.subscribe(
      (s) => (this.isAuthorized = s)
    );
    this.userStateFacade.name$.subscribe((name) => (this.userName = name));
  }
  userName: string | undefined = '';
  buttonTitle: string = 'Logout';
  isAuthorized: boolean = false;

  logout() {
    this.authStateFacade.logout();
  }
}
