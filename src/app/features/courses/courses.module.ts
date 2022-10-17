import { AddEditCourseComponent } from 'src/app/features/add-edit-course/add-edit-course.component';
import { RegistrationComponent } from 'src/app/features/registration/registration.component';
import { NgModule } from '@angular/core';
import { CoursesComponent } from 'src/app/features/courses/courses.component';
import { CourseComponent } from 'src/app/features/course/course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/features/login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    LoginComponent,
    RegistrationComponent,
    AddEditCourseComponent,
  ],
  exports: [CoursesComponent, CourseComponent],
  imports: [SharedModule, FormsModule, CommonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [CoursesComponent],
})
export class CoursesModule {}
