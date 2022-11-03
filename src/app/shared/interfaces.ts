export interface IUser {
  name?: string;
  email: string;
  password: string;
  role?: string;
  id?: string;
}

export interface ICourse {
  title: string;
  description: string;
  authors: string[] | IAuthor[] | any;
  duration: number;
  creationDate: Date;
  id?: string;
}

export interface IAuthor {
  name: string;
  id: string;
}
