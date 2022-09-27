import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [ButtonComponent, InfoComponent, SearchComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FontAwesomeModule],
  providers: [],
  exports: COMPONENTS,
})
export class SharedModule {}
