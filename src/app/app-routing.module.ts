import { CourseComponent } from 'src/app/features/course/course.component';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { CoursesComponent } from './features/courses/courses.component';
import { AddEditCourseComponent } from 'src/app/features/add-edit-course/add-edit-course.component';
import { RegistrationComponent } from 'src/app/features/registration/registration.component';
import { LoginComponent } from 'src/app/features/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { AuthorizedGuard } from './auth/guards/authorized.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    loadChildren: () =>
      import('./features/courses/courses.module').then(
        (mod) => mod.CoursesModule
      ),
    canLoad: [AuthorizedGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'courses/add',
    component: AddEditCourseComponent,
    canLoad: [AuthorizedGuard],
  },
  {
    path: 'course/:id',
    component: CourseComponent,
    canLoad: [AuthorizedGuard],
  },
  {
    path: 'courses/edit/:id',
    component: AddEditCourseComponent,
    canLoad: [AuthorizedGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [NotAuthorizedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
