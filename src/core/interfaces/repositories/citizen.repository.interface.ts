import { InjectionToken } from '@nestjs/common';
import { Citizen } from 'src/core/domain/entities/citizen';

export interface ICitizenRepository {
  create(citizen: Citizen): Promise<string>;
  findByEmail(email: string): Promise<Citizen | null>;
  findByCpf(cpf: string): Promise<Citizen | null>;
}

export const CITIZEN_REPOSITORY: InjectionToken<ICitizenRepository> = Symbol('ICitizenRepository');
