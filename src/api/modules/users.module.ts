import { Module } from '@nestjs/common';
import { UsersController } from '../controllers';
import { USER_REPOSITORY } from 'src/core/interfaces/repositories';
import { UserRepository } from 'src/infra/database/repositories';
import { UserService } from 'src/core/services';
import { USER_SERVICE } from 'src/core/interfaces/services';

@Module({
  controllers: [UsersController],
  providers: [
    UserRepository,
    { provide: USER_REPOSITORY, useExisting: UserRepository },
    UserService,
    { provide: USER_SERVICE, useExisting: UserService },
  ],
})
export class UsersModule {}
