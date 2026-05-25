import { ConflictException, Inject, Injectable, Logger } from '@nestjs/common';
import { ICitizenService } from 'src/core/interfaces/services/citizen.service.interface';
import { CITIZEN_REPOSITORY } from 'src/core/interfaces/repositories/citizen.repository.interface';
import type { ICitizenRepository } from 'src/core/interfaces/repositories/citizen.repository.interface';
import { HASH_PROVIDER } from 'src/core/interfaces/cryptography';
import type { IHashProvider } from 'src/core/interfaces/cryptography';
import { Citizen } from '../domain/entities/citizen';
import { CITIZENS_MESSAGES } from '../messages';

@Injectable()
export class CitizenService implements ICitizenService {
  private readonly logger = new Logger(CitizenService.name);

  constructor(
    @Inject(CITIZEN_REPOSITORY) private readonly citizenRepository: ICitizenRepository,
    @Inject(HASH_PROVIDER) private readonly hashProvider: IHashProvider,
  ) {}

  async create(citizen: Citizen): Promise<string> {
    try {
      const existingCitizen = await this.citizenRepository.findByEmail(citizen.email!);
      if (existingCitizen) throw new ConflictException(CITIZENS_MESSAGES.ALREADY_EXISTS);

      const existingCitizenByCpf = await this.citizenRepository.findByCpf(citizen.cpf!);
      if (existingCitizenByCpf) throw new ConflictException(CITIZENS_MESSAGES.ALREADY_EXISTS);

      citizen.password = await this.hashProvider.hash(citizen.password!);

      return await this.citizenRepository.create(citizen);
    } catch (error) {
      this.logger.error(error instanceof Error ? error.message : error);
      throw error;
    }
  }
}
