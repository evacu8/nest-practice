import { Roles } from '../../shared/enums/roles.enum';

export interface ExternalUserDto {
  id: string;
  firstName: string;
  lastName: string;
  role: Roles;
  address?: Array<Address>;
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
