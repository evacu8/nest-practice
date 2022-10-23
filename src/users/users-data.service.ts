import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersDataService {
  private users: Array<User> = [];

  addUser(_item_: CreateUserDto): User {
    const user: User = {
      ..._item_,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((i) => i.id !== id);
  }

  updateUser(id: string, dto: UpdateUserDto): User {
    const user = this.getUserById(id);
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = { ...user, ...dto, updatedAt: new Date() };
    return this.users[index];
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  getUserByEmail(email: string): User {
    return this.users.find((user) => user.email === email);
  }

  getAllUsers(): Array<User> {
    return this.users;
  }
}
