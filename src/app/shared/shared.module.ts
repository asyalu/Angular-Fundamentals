import { FilterPipe } from './pipes/filter.pipe';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { ButtonComponent } from './components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DurationPipe } from './pipes/duration-pipe.pipe';
import { StringJoinerPipe } from './pipes/string-joiner.pipe';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  EmailValidatorDirective,
  DurationPipe,
  StringJoinerPipe,
  CreationDatePipe,
  FilterPipe,
  HeaderComponent,
  NotFoundComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  providers: [],
  exports: COMPONENTS,
})
export class SharedModule {}
