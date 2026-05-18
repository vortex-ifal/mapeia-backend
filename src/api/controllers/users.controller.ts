import { Controller, Inject, Post } from '@nestjs/common';
import type { IUserService } from 'src/core/interfaces/services';
import { USER_SERVICE } from 'src/core/interfaces/services';

@Controller('users')
export class UsersController {
  public constructor(@Inject(USER_SERVICE) private readonly userService: IUserService) {}

  @Post()
  async create() {
    const user = 'user';
    this.userService.create(user);
  }
}
