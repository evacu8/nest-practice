import { Roles } from '../../shared/enums/roles.enum';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: Roles;
  email: string;
  dateOfBirth: Date;
  address?: Array<Address>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  country: string;
  city: string;
  street: string;
  house: number;
  apartment: number;
}
