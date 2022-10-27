export interface IUser {
  name?: string;
  email: string;
  password: string;
}

export interface ICourse {
  title: string;
  description: string;
  authors: string[];
  duration: number;
  created: Date;
  id?: string;
}
