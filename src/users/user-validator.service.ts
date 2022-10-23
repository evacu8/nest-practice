import { Injectable } from '@nestjs/common';
import { UserRequireUniqueEmailException } from './exceptions/user-require-unique-email-exception';
import { UsersDataService } from './users-data.service';

@Injectable()
export class UserValidatorService {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersDataService: UsersDataService) { }

  validateUniqueEmail(email: string): void {
    const user = this.usersDataService.getUserByEmail(email);
    if (user) {
      throw new UserRequireUniqueEmailException();
    }
  }
}
