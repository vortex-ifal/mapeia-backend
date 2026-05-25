import { Module } from '@nestjs/common';
import { CitizensController } from '../controllers';
import { CITIZEN_REPOSITORY } from 'src/core/interfaces/repositories';
import { CitizenRepository } from 'src/infra/database/repositories';
import { CitizenService } from 'src/core/services';
import { CITIZEN_SERVICE } from 'src/core/interfaces/services';
import { HASH_PROVIDER } from 'src/core/interfaces/cryptography';
import { BcryptHashProvider } from 'src/infra/cryptography';

@Module({
  controllers: [CitizensController],
  providers: [
    CitizenRepository,
    { provide: CITIZEN_REPOSITORY, useExisting: CitizenRepository },
    CitizenService,
    { provide: CITIZEN_SERVICE, useExisting: CitizenService },
    BcryptHashProvider,
    { provide: HASH_PROVIDER, useExisting: BcryptHashProvider },
  ],
})
export class CitizensModule {}
