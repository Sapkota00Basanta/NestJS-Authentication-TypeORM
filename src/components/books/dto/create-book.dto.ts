// Import Third-Party Modules
import { ApiProperty } from '@nestjs/swagger';

/**
 * This module is a contract with which data is being transferred.
 * This is specific for book creation data transfer.
 */
export class CreateBookDto {
  @ApiProperty({
    type: String,
    description: 'Title of book resource.',
  })
  title: string;

  @ApiProperty({
    type: String,
    description: 'Generalized description about the book.',
  })
  description: string;

  @ApiProperty({
    type: String,
    description: 'Thumbnail property of book resource.',
  })
  thumbnail: string;

  @ApiProperty({
    type: [String],
    description: 'Author of the book resource.',
  })
  author: Array<string>;
}
