import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from 'src/app/features/courses/courses.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { CourseComponent } from 'src/app/features/course/course.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CoursesComponent, HeaderComponent, CourseComponent],
  exports: [CoursesComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [CoursesComponent],
})
export class CoursesModule {}
