import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() title?: string = '';
  @Input() icon?: IconDefinition;
  @Input() disabled?: boolean = false;
  @Input() type?: string = 'text';
  @Output() clickButton = new EventEmitter();

  onClick(): void {
    this.clickButton.emit();
  }
}
