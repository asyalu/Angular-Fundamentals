import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  inputValue: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() error: string = '';
  @Output() value = new EventEmitter<string>();
  constructor() {}

  getValue(value: string) {
    this.value.emit(value);
  }

  ngOnInit(): void {}
}
