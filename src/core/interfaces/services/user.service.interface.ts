import { InjectionToken } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user';

export interface IUserService {
  create(user: User): Promise<string>;
}

export const USER_SERVICE: InjectionToken<IUserService> = Symbol('IUserService');
