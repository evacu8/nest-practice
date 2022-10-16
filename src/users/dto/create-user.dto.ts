import { Roles } from '../enums/roles.enum';

export interface CreateUsertDto {
  firstName: string;
  lastName: string;
  role: Roles;
  address: Address;
}

export interface Address {
  country: string;
  city: string;
  street: string;
  house: number;
  apartment: number;
}
