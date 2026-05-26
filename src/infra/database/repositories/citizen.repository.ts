import { Injectable } from '@nestjs/common';
import { ICitizenRepository } from 'src/core/interfaces/repositories/citizen.repository.interface';
import { PrismaService } from '../prisma/prisma.service';
import { Citizen } from 'src/core/domain/entities/citizen';
import { CitizensMapper } from '../prisma/mappers';

@Injectable()
export class CitizenRepository implements ICitizenRepository {
  constructor(private prisma: PrismaService) {}

  async create(citizen: Citizen): Promise<string> {
    const data = CitizensMapper.toPrismaUserCreate(citizen);

    const userCreated = await this.prisma.user.create({
      data,
      include: { citizenProfile: true },
    });

    return userCreated.citizenProfile!.id;
  }

  async findByEmail(email: string): Promise<Citizen | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { citizenProfile: true },
    });

    if (!user) return null;

    return CitizensMapper.toDomain(user);
  }

  async findByCpf(cpf: string): Promise<Citizen | null> {
    const profile = await this.prisma.citizenProfile.findUnique({
      where: { cpf },
      include: { user: true },
    });

    if (!profile) return null;

    return CitizensMapper.toDomain({ ...profile.user, citizenProfile: profile });
  }
}
