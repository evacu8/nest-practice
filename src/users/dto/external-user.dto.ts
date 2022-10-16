import { Roles } from '../enums/roles.enum';

export interface ExternalUserDto {
  id: string;
  firstName: string;
  lastName: string;
  role: Roles;
  address: Address;
  createdAt: Array<number>;
  updatedAt: Array<number>;
}

export interface Address {
  country: string;
  city: string;
  street: string;
  house: number;
  apartment: number;
}
