export interface UserAuthTypes {
  _id?: string;
  name: string;
  email: string;
  password: string;
}

export interface AvalibilityTypes {
  Day: string;
  startTime: Date;
  endTime: Date;
}

export type SendEmailParams = {
  toMail: string;
  subject: string;
  body: string;
};