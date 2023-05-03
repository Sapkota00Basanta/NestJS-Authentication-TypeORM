// Import Third-Party Modules
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

// Import User-Defined Modules
import { AuthService } from '../auth.service';

/**
 * This module is responsible for checking if current user
 * is properly validated.
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // super({
    //   userNameField: 'email',
    //   passNameField: 'password',
    // });
    super();
  }

  /**
   * This method of local strategy is responsible for validating user
   * & if it the user is valid it adds user property in request object.
   * @param userName User name of user
   * @param password Password of user
   * @returns Unauthorized Exception or Current User
   */
  async validate(userName: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(userName, password);

    if (!user) {
      throw new UnauthorizedException('Inavlid credentials');
    }
    return user;
  }
}
