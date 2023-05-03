// Import Third-Party Modules
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Here, AuthGuard is automatically provided by passport module.
 * This module is responsible for restricting access to routes for
 * any unvalidated user.
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
