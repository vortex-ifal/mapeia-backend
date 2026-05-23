import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IHashProvider } from 'src/core/interfaces/cryptography';

@Injectable()
export class BcryptHashProvider implements IHashProvider {
  private readonly rounds = 12;

  hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.rounds);
  }

  compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
