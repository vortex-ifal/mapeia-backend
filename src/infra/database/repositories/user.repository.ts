import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/core/interfaces/repositories/user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  async create(user: any): Promise<string> {
    return '';
  }
}
