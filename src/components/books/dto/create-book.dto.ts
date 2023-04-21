// Import Third-Party Modules
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

// Import User-Defined Modules
import { Users } from 'src/components/users/entities/user.entity';

/**
 * This module is a contract with which data is being transferred.
 * This is specific for book creation data transfer.
 */
export class CreateBookDto {
  @ApiProperty({
    type: String,
    description: 'Title of book resource.',
  })
  @IsNotEmpty({ message: 'Title field of book cannot be empty.' })
  @IsString({ message: 'Type of Book Title must be String.' })
  title: string;

  @ApiProperty({
    type: String,
    description: 'Generalized description about the book.',
  })
  @IsNotEmpty({ message: 'Description about the book cannot be empty.' })
  @IsString({ message: 'Type of Book Description must be String.' })
  description: string;

  @ApiProperty({
    type: String,
    description: 'Thumbnail property of book resource.',
  })
  @IsNotEmpty({ message: 'Thumbnail field cannot be empty.' })
  @IsString({ message: 'Type of Book thumbnail must be string.' })
  thumbnail: string;

  @ApiProperty({
    type: [String],
    description: 'Author of the book resource.',
  })
  @IsNotEmpty({ message: 'Author filed cannot be empty.' })
  @IsArray({ message: 'Type of Book Author must be an Array of string.' })
  author: Array<string>;

  @ApiProperty({
    type: Users,
    description: 'User who is viewing the books resource.',
  })
  user: Users;
}
