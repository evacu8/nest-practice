import { Module } from '@nestjs/common';
import { UsersDataService } from './users-data.service';
import { UsersController } from './users.controller';
import { UserValidatorService } from './user-validator.service';

@Module({
  providers: [UsersDataService, UserValidatorService],
  controllers: [UsersController],
})
export class UsersModule { }
