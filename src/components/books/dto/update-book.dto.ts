// Import Third-Party Modules
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

// Import User-Defined Modules
import { CreateBookDto } from './create-book.dto';

/**
 * This module is a contract or interface defining how we can update in a
 */
export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty({
    type: Number,
    description: 'Uniquer indentifier assigned to specific Book resource.',
  })
  id: number;
}
