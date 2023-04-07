// Import Third-Party Modules
import { PartialType } from '@nestjs/mapped-types';

// Import User-Defined Modules
import { CreateBookDto } from './create-book.dto';

/**
 * This module is a contract or interface defining how we can update in a
 */
export class UpdateBookDto extends PartialType(CreateBookDto) {
  id: number;
}
