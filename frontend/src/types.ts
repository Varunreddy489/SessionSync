export interface RegisterData {
  _id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}


export interface LoginData {
  _id?: string;
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
