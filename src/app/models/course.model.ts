export class Course {
  constructor(
    title = '',
    description = '',
    authors = [],
    created = new Date(),
    duration = 0
  ) {}
}

export const initialCourse = {
  title: '',
  description: '',
  authors: [],
  created: new Date(),
  duration: 0,
};
