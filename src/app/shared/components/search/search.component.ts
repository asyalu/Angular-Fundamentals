import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() searchValue = new EventEmitter<string>();
  buttonTitle: string = 'Search';
  constructor() {}

  getValue(value: string) {
    this.searchValue.emit(value);
  }

  ngOnInit(): void {}
}
