import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() title: string = 'title';
  @Input() text: string = 'text';
  @Input() buttonTitle: string = '';

  ngOnInit(): void {}
}
