import { Citizen } from 'src/core/domain/entities/citizen';
import type { Prisma, User, CitizenProfile } from '../../../../../generated/prisma/client';

type UserWithProfile = User & { citizenProfile: CitizenProfile | null };

export class CitizensMapper {
  public static toPrismaUserCreate(citizen: Citizen): Prisma.UserCreateInput {
    return {
      email: citizen.email!,
      password: citizen.password!,
      citizenProfile: {
        create: {
          name: citizen.name!,
          cpf: citizen.cpf!,
        },
      },
    };
  }

  public static toDomain(user: UserWithProfile): Citizen {
    return new Citizen({
      id: user.citizenProfile?.id,
      name: user.citizenProfile?.name,
      email: user.email,
      password: user.password,
      cpf: user.citizenProfile?.cpf,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }
}
