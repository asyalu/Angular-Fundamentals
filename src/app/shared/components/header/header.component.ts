import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
    this.userName = this.auth.user.name;
    this.auth.isAuthorized$.subscribe((s) => (this.isAuthorized = s));
  }
  userName: string | undefined = '';
  buttonTitle: string = 'Logout';
  isAuthorized: boolean = false;

  logout() {
    this.auth.logout().subscribe();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
