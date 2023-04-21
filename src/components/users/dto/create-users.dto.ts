/**
 * This module is a contract with which data is being transferred.
 * This is responsible for users creation data transfer.
 */
export class CreateUserDto {
  name: string;
  email: string;
  password: string;
}
