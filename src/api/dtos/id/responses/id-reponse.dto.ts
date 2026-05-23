import { ApiProperty } from '@nestjs/swagger';

export class IdResponseDto {
  @ApiProperty({
    example: '019e3dc6-1fa9-7abb-823a-054ec1b19680',
  })
  id: string;

  public static fromDomain(id: string): IdResponseDto {
    return {
      id,
    };
  }
}
