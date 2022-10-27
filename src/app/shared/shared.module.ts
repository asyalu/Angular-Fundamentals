import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
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
  HeaderComponent,
  NotFoundComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FontAwesomeModule],
  providers: [],
  exports: COMPONENTS,
})
export class SharedModule {}
