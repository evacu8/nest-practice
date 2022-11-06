import { Roles } from '../../shared/enums/roles.enum';
import { Transform, Type } from 'class-transformer';
import { arrayToDate } from '../../helpers/date.helper';
import {
  IsEmail,
  IsNotEmpty,
  ValidateNested,
  IsNumber,
  IsEnum,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Transform(({ value }: { value: number[] }) => arrayToDate(value))
  dateOfBirth: Date;

  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Array<Address>;

  @IsEnum(Roles)
  role: Roles;
}

export class Address {
  @IsNotEmpty()
  country: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  street: string;
  @IsNotEmpty()
  @IsNumber()
  house: number;
  @IsNumber()
  apartment: number;
}
