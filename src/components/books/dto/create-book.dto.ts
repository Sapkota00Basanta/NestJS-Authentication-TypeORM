/**
 * This module is a contract with which data is being transferred.
 * This is specific for creating data transfer.
 */
export class CreateBookDto {
  title: string;
  description: string;
  thumbnail: string;
  author: Array<string>;
}
