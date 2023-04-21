// Import Third-Party Modules
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

// Import User-Defined Modules
import { AuthService } from 'src/components/auth/auth.service';
import { UsersService } from 'src/components/users/users.service';

/**
 * This is an interceptor responsible to fetch token from request &
 * decode it. Pass the user information gathered based on decoded token.
 */
export class AuthInterceptor implements NestInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const tokenArray = request.headers.authorization;
    if (tokenArray) {
      request.body['user'] = this.authService.decode(
        tokenArray.split(' ')[1],
      ).user;
    }

    return next.handle().pipe();
  }
}
