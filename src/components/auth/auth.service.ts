// Import Third-Party Modules
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

// Import User-Defined Modules
import { UsersService } from '../users/users.service';

/**
 * This module is service which is specific to Auth repository
 * to retreive user and verify the password.
 */
@Injectable()
export class AuthService {
  constructor(private userServive: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userServive.findOne({ email: email });
    console.log('Decrypted Valye from bcrypt', await bcrypt.hash(pass, 10));
    if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
