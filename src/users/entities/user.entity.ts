import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  created_at?: string | Date;

  @ApiProperty()
  updated_at?: string | Date;
}
