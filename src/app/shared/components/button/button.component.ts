import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() title?: string = '';
  @Input() icon?: IconDefinition;
  @Output() clickButton = new EventEmitter();

  onClick(): void {
    this.clickButton.emit();
  }

  ngOnInit(): void {}
}
