import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { ApiProperty } from '@nestjs/swagger';
import { validateCpf } from 'src/core/utils/validators/cpf.validator';

const CreateCitizenSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: 'Nome deve ter pelo menos 3 caracteres' })
    .max(200, { message: 'Nome deve ter no máximo 200 caracteres' }),
  email: z.email({ message: 'Email inválido' }).trim(),
  password: z
    .string()
    .trim()
    .min(8, { message: 'Senha deve ter pelo menos 8 caracteres' })
    .max(64, { message: 'Senha deve ter no máximo 64 caracteres' }),
  cpf: z
    .string()
    .trim()
    .length(11, { message: 'CPF deve ter 11 caracteres' })
    .regex(/^\d+$/, { message: 'CPF deve conter apenas números' })
    .refine(validateCpf, { message: 'CPF inválido' }),
});

export class CreateCitizenRequestDto extends createZodDto(CreateCitizenSchema) {
  @ApiProperty({
    example: 'Simon Petrikov',
  })
  name: string;
  @ApiProperty({
    example: 'simonp@omail.com',
  })
  email: string;
  @ApiProperty({
    example: '12345678',
  })
  password: string;

  @ApiProperty({
    example: '62228228001',
  })
  cpf: string;
}
