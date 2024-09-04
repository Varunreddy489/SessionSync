export interface UserAuthTypes {
  name: string;
  email: string;
  password: string;
  availability: AvalibilityTypes;
}

export interface AvalibilityTypes {
  Day: string;
  startTime: Date;
  endTime: Date;
}
