import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { dateToArray } from 'src/helpers/date.helper';
import { CreateUserDto } from './dto/create-user.dto';
import { ExternalUserDto } from './dto/external-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { UsersDataService } from './users-data.service';

@Controller('users')
export class UsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: UsersDataService) { }

  @Post()
  addProduct(@Body() item: CreateUserDto): ExternalUserDto {
    return this.mapUserToExternal(this.usersRepository.addUser(item));
  }

  @Get()
  getAllUsers(): ExternalUserDto[] {
    const users = this.usersRepository.getAllUsers();
    return users.map((p) => this.mapUserToExternal(p));
  }

  @Get(':id')
  getProductById(@Param('id') _id_: string): ExternalUserDto {
    return this.mapUserToExternal(this.usersRepository.getUserById(_id_));
  }

  @Put(':id')
  updateUser(
    @Param('id') _id_: string,
    @Body() _user_: UpdateUserDto,
  ): ExternalUserDto {
    return this.mapUserToExternal(
      this.usersRepository.updateUser(_id_, _user_),
    );
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id') _id_: string): void {
    this.usersRepository.deleteUser(_id_);
  }

  mapUserToExternal(user: User): ExternalUserDto {
    return {
      ...user,
      createdAt: dateToArray(user.createdAt),
      updatedAt: dateToArray(user.updatedAt),
    };
  }
}
