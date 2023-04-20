// Import Third-Party Modules
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * This module is used as guard to check for the authservice
 * module of auth module.
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
