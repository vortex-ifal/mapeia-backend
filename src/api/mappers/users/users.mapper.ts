import { CreateUserRequestDto } from 'src/api/dtos/users/requests/create-user-request.dto';
import { User, UserBuilder } from 'src/core/domain/entities/user';

export class UsersMapper {
  public static createUserDtoToEntity(data: CreateUserRequestDto): User {
    return new UserBuilder()
      .withName(data.name)
      .withEmail(data.email)
      .withPassword(data.password)
      .withCpf(data.cpf)
      .build();
  }
}
