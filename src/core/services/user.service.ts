import { ConflictException, Inject, Injectable, Logger } from '@nestjs/common';
import { IUserService } from 'src/core/interfaces/services/user.service.interface';
import { USER_REPOSITORY } from 'src/core/interfaces/repositories/user.repository.interface';
import type { IUserRepository } from 'src/core/interfaces/repositories/user.repository.interface';
import { HASH_PROVIDER } from 'src/core/interfaces/cryptography';
import type { IHashProvider } from 'src/core/interfaces/cryptography';
import { User } from '../domain/entities/user';
import { USERS_MESSAGES } from '../messages';

@Injectable()
export class UserService implements IUserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(HASH_PROVIDER) private readonly hashProvider: IHashProvider,
  ) {}

  async create(user: User): Promise<string> {
    try {
      const existingUser = await this.userRepository.findById(user.email!);
      if (existingUser) throw new ConflictException(USERS_MESSAGES.ALREADY_EXISTS);

      const existingUserByCpf = await this.userRepository.findByCpf(user.cpf!);
      if (existingUserByCpf) throw new ConflictException(USERS_MESSAGES.ALREADY_EXISTS);

      user.password = await this.hashProvider.hash(user.password!);

      return await this.userRepository.create(user);
    } catch (error) {
      this.logger.error(error instanceof Error ? error.message : error);
      throw error;
    }
  }
}
