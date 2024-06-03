export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role:"FARMER"|"ADMIN";
  password: string;
}
