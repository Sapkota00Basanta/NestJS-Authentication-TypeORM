// Import Third-Party Modules
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// Import User-Defined Modules
import { jwtConstants } from '../constants';

/**
 * Jwt Strategy service which is responsible for protecting
 * routes against unauthorized user.
 * Here,
 * a) jwtFromRequest -> Extract JWT from request & supply the bearer token in
 * authorization header.
 * b) ignoreExpiration -> It is used to protect access against expired JWT.
 * c) secretOrKey -> Supply the secret key or string.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  validate(payload: any) {
    return { payload };
  }
}
