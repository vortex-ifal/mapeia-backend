import { Body, Controller, Inject, Post } from '@nestjs/common';
import type { IUserService } from 'src/core/interfaces/services';
import { USER_SERVICE } from 'src/core/interfaces/services';
import { CreateUserRequestDto } from '../dtos/users/requests/create-user-request.dto';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { IdResponseDto } from '../dtos/id/responses/id-reponse.dto';
import { UsersMapper } from '../mappers/users';

@ApiTags('users')
@Controller('users')
export class UsersController {
  public constructor(@Inject(USER_SERVICE) private readonly userService: IUserService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Usuário criado com sucesso.',
    type: IdResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Dados inválidos para a criação do usuário.' })
  @ApiConflictResponse({
    description: 'Já existe um usuário cadastrado com o email ou CPF informado.',
  })
  async create(@Body() data: CreateUserRequestDto) {
    const user = UsersMapper.createUserDtoToEntity(data);
    const userId = await this.userService.create(user);
    return IdResponseDto.fromDomain(userId);
  }
}
