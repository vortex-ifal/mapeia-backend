import { Body, Controller, Inject, Post } from '@nestjs/common';
import type { ICitizenService } from 'src/core/interfaces/services';
import { CITIZEN_SERVICE } from 'src/core/interfaces/services';
import { CreateCitizenRequestDto } from '../dtos/citizens/requests/create-citizen-request.dto';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { IdResponseDto } from '../dtos/id/responses/id-reponse.dto';
import { CitizensMapper } from '../mappers/citizens';

@ApiTags('citizens')
@Controller('citizens')
export class CitizensController {
  public constructor(@Inject(CITIZEN_SERVICE) private readonly citizenService: ICitizenService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Cidadão criado com sucesso.',
    type: IdResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Dados inválidos para a criação do cidadão.' })
  @ApiConflictResponse({
    description: 'Já existe um cidadão cadastrado com o email ou CPF informado.',
  })
  async create(@Body() data: CreateCitizenRequestDto) {
    const citizen = CitizensMapper.createCitizenDtoToEntity(data);
    const citizenId = await this.citizenService.create(citizen);
    return IdResponseDto.fromDomain(citizenId);
  }
}
