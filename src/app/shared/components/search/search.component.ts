import { CoursesStateFacade } from './../../../store/courses/courses.facade';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() searchValue = new EventEmitter<string>();
  buttonTitle: string = 'Search';
  criteriaList = ['title', 'duration', 'creationDate', 'description'];
  form!: FormGroup;

  constructor(private coursesStateFacade: CoursesStateFacade) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      searchCriteria: new FormControl('title', Validators.required),
      input: new FormControl('', Validators.required),
    });
  }

  submit() {
    const url = `?${this.form.value.searchCriteria}=${encodeURIComponent(
      this.form.value.input
    )}`;
    if (this.form.value.input) {
      this.coursesStateFacade.getFilteredCourses(url);
    } else {
      this.coursesStateFacade.getAllCourses();
    }
  }
}
