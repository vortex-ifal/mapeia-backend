import { User, UserProps } from '.';

export class UserBuilder {
  private props: Partial<UserProps> = {};

  public static create(): UserBuilder {
    return new UserBuilder();
  }

  public withId(id: string): this {
    this.props.id = id;
    return this;
  }

  public withName(name: string): this {
    this.props.name = name;
    return this;
  }

  public withEmail(email: string): this {
    this.props.email = email;
    return this;
  }

  public withPassword(password: string): this {
    this.props.password = password;
    return this;
  }

  public withCpf(cpf: string): this {
    this.props.cpf = cpf;
    return this;
  }

  public withCreatedAt(createdAt: Date): this {
    this.props.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt: Date): this {
    this.props.updatedAt = updatedAt;
    return this;
  }

  public build(): User {
    return User.create({
      id: this.props.id,
      name: this.props.name,
      email: this.props.email,
      password: this.props.password,
      cpf: this.props.cpf,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    });
  }
}
