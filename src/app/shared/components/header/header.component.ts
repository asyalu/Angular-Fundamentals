import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string = 'Tom';
  buttonTitle: string = 'Logout';
  constructor() {}

  ngOnInit(): void {}
}
