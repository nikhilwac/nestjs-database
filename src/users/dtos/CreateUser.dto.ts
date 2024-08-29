import { IsEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmpty()
  @ApiProperty()
  username: string;

  @ApiProperty()
  @IsEmpty()
  password: string;
}
