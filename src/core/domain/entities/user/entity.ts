import { UserProps } from '.';

export class User {
  constructor(private readonly props: UserProps) {}

  public static create(props: UserProps): User {
    return new User(props);
  }

  get id(): string | null | undefined {
    return this.props.id;
  }

  get name(): string | null | undefined {
    return this.props.name;
  }

  get email(): string | null | undefined {
    return this.props.email;
  }

  get password(): string | null | undefined {
    return this.props.password;
  }

  get cpf(): string | null | undefined {
    return this.props.cpf;
  }

  get createdAt(): Date | null | undefined {
    return this.props.createdAt;
  }

  get updatedAt(): Date | null | undefined {
    return this.props.updatedAt;
  }
}
