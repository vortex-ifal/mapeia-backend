import { InjectionToken } from '@nestjs/common';
import { Citizen } from 'src/core/domain/entities/citizen';

export interface ICitizenService {
  create(citizen: Citizen): Promise<string>;
}

export const CITIZEN_SERVICE: InjectionToken<ICitizenService> = Symbol('ICitizenService');
