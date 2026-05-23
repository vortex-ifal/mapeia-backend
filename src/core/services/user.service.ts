import { ConflictException, Inject, Injectable, Logger } from '@nestjs/common';
import { IUserService } from 'src/core/interfaces/services/user.service.interface';
import { USER_REPOSITORY } from 'src/core/interfaces/repositories/user.repository.interface';
import type { IUserRepository } from 'src/core/interfaces/repositories/user.repository.interface';
import { User } from '../domain/entities/user';
import { USERS_MESSAGES } from '../messages';

@Injectable()
export class UserService implements IUserService {
  private readonly logger = new Logger(UserService.name);

  constructor(@Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository) {}

  async create(user: User): Promise<string> {
    try {
      const existingUser = await this.userRepository.findById(user.email!);
      if (existingUser) throw new ConflictException(USERS_MESSAGES.ALREADY_EXISTS);

      const existingUserByCpf = await this.userRepository.findByCpf(user.cpf!);
      if (existingUserByCpf) throw new ConflictException(USERS_MESSAGES.ALREADY_EXISTS);

      return await this.userRepository.create(user);
    } catch (error) {
      this.logger.error(error instanceof Error ? error.message : error);
      throw error;
    }
  }
}
