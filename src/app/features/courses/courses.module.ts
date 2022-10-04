import { AddEditCourseComponent } from 'src/app/features/add-edit-course/add-edit-course.component';
import { RegistrationComponent } from 'src/app/features/registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from 'src/app/features/courses/courses.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { CourseComponent } from 'src/app/features/course/course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/features/login/login.component';

@NgModule({
  declarations: [
    CoursesComponent,
    HeaderComponent,
    CourseComponent,
    LoginComponent,
    RegistrationComponent,
    AddEditCourseComponent,
  ],
  exports: [CoursesComponent, HeaderComponent, CourseComponent],
  imports: [BrowserModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [CoursesComponent],
})
export class CoursesModule {}
