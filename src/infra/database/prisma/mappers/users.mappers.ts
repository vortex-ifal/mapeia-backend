import { User } from 'src/core/domain/entities/user';
import type { Prisma, users } from '../../../../../generated/prisma/client';

export class UsersMapper {
  public static toPrismaCreate(user: User): Prisma.usersCreateInput {
    return {
      name: user.name!,
      email: user.email!,
      password: user.password!,
      cpf: user.cpf!,
    };
  }

  public static toDomain(user: users): User {
    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      cpf: user.cpf,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    });
  }
}
