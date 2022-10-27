import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() placeholder: string = '';
  @Output() searchValue = new EventEmitter<string>();
  buttonTitle: string = 'Search';

  getValue(value: string) {
    this.searchValue.emit(value);
  }
}
