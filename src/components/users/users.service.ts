// Import Third-Party Modules
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Import User-Defined Modules
import { Users } from './entities/user.entity';

/**
 * This module is service which is specific to user repository
 * to interact with database & used in user controller.
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async findOne(data: number | any): Promise<Users | undefined> {
    return await this.userRepository.findOne(data);
  }

  async create(data) {
    return await this.userRepository
      .save(data)
      .then((res) => res)
      .catch((error) => console.log(JSON.stringify(error)));
  }
}
