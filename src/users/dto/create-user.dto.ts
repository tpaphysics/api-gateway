import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Thiago',
  })
  name: string;

  @ApiProperty({
    example: 'tpaphysics@mail.com',
  })
  email: string;
}
