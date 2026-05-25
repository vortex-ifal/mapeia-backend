import { CitizenProps } from '.';

export class Citizen {
  constructor(private readonly props: CitizenProps) {}

  public static create(props: CitizenProps): Citizen {
    return new Citizen(props);
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

  set password(password: string) {
    this.props.password = password;
  }
}
