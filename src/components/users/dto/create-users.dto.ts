// Import Third-Party Modules
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

/**
 * This module is a contract with which data is being transferred.
 * This is responsible for users creation data transfer.
 */
export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'The name of the user.',
  })
  @IsNotEmpty({ message: 'Name field cannot be empty.' })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Email address of the user.',
  })
  @IsEmail({})
  email: string;

  @ApiProperty({
    type: String,
    description: 'Password field of the user.',
  })
  @IsNotEmpty({
    message: 'Password field cannot be empty.',
  })
  password: string;
}
