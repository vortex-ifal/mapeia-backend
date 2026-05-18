import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from 'src/core/interfaces/services/user.service.interface';
import { USER_REPOSITORY } from 'src/core/interfaces/repositories/user.repository.interface';
import type { IUserRepository } from 'src/core/interfaces/repositories/user.repository.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(@Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository) {}

  async create(user: any): Promise<string> {
    return this.userRepository.create(user);
  }
}
