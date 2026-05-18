import { InjectionToken } from '@nestjs/common';

export interface IUserService {
  create(data: any): Promise<string>;
}

export const USER_SERVICE: InjectionToken<IUserService> = Symbol('IUserService');
