// Import Third-Party Modules
import { Module } from '@nestjs/common';

// Import User-Defined Modules
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';

/**
 * This module is use to define and structure user module.
 */
@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService],
})
export class UsersModule {}
