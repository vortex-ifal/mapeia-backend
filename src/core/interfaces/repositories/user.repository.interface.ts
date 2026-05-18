import { InjectionToken } from '@nestjs/common';

export interface IUserRepository {
  create(user: any): Promise<string>;
}

export const USER_REPOSITORY: InjectionToken<IUserRepository> = Symbol('IUserRepository');
