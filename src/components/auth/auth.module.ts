// Import Third-Party Modules
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

// Import User-Defined Modules
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';

/**
 * This module is used by Auth Module for structuring the
 * project and to import and export services and providers
 */
@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
