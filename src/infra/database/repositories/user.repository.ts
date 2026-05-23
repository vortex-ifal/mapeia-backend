import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/core/interfaces/repositories/user.repository.interface';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'src/core/domain/entities/user';
import { UsersMapper } from '../prisma/mappers';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<string> {
    const data = UsersMapper.toPrismaCreate(user);

    const userCreated = await this.prisma.users.create({
      data,
    });

    return userCreated.id;
  }

  async findById(email: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;

    return UsersMapper.toDomain(user);
  }

  async findByCpf(cpf: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        cpf,
      },
    });

    if (!user) return null;

    return UsersMapper.toDomain(user);
  }
}
