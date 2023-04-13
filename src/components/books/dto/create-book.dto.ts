/**
 * This module is a contract with which data is being transferred.
 * This is specific for book creation data transfer.
 */
export class CreateBookDto {
  title: string;
  description: string;
  thumbnail: string;
  author: Array<string>;
}
