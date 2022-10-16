import { Module } from '@nestjs/common';
import { UsersDataService } from './users-data.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersDataService],
  controllers: [UsersController],
})
export class UsersModule { }
