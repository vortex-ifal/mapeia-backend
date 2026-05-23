import { InjectionToken } from '@nestjs/common';

export interface IHashProvider {
  hash(plain: string): Promise<string>;
  compare(plain: string, hashed: string): Promise<boolean>;
}

export const HASH_PROVIDER: InjectionToken<IHashProvider> = Symbol('IHashProvider');
