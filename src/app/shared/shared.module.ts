import { FormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputComponent } from './components/input/input.component';

const COMPONENTS = [
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  InputComponent,
  EmailValidatorDirective,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  providers: [],
  exports: COMPONENTS,
})
export class SharedModule {}
