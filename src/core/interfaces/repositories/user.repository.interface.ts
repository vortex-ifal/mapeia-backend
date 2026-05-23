import { InjectionToken } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user';

export interface IUserRepository {
  create(user: User): Promise<string>;
  findById(email: string): Promise<User | null>;
  findByCpf(cpf: string): Promise<User | null>;
}

export const USER_REPOSITORY: InjectionToken<IUserRepository> = Symbol('IUserRepository');
