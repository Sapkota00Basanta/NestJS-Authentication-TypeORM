// Import Third-Party Modules
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * JwtAuthGuard class which extends buit-in AuthGuard.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
