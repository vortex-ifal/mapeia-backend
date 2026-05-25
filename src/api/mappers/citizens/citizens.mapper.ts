import { CreateCitizenRequestDto } from 'src/api/dtos/citizens/requests/create-citizen-request.dto';
import { Citizen, CitizenBuilder } from 'src/core/domain/entities/citizen';

export class CitizensMapper {
  public static createCitizenDtoToEntity(data: CreateCitizenRequestDto): Citizen {
    return new CitizenBuilder()
      .withName(data.name)
      .withEmail(data.email)
      .withPassword(data.password)
      .withCpf(data.cpf)
      .build();
  }
}
