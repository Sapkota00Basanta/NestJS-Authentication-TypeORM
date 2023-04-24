// Import Third-Party Modules
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

// Import User-Defined Modules
import { UsersService } from '../users/users.service';

/**
 * This module is service which is specific to Auth repository
 * to retreive user and verify the password.
 */
@Injectable()
export class AuthService {
  constructor(
    private userServive: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userServive.findOne({ email: email });
    console.log('Decrypted Valye from bcrypt', await bcrypt.hash(pass, 10));
    if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
      const { password, ...result } = user;
      console.log(`Password value from auth service : ${password}`);
      return result;
    }
    return null;
  }

  async login(userData: any) {
    const payload = {
      user: {
        id: userData.user.id,
        email: userData.user.email,
        name: userData.user.name,
        created_at: userData.user.created_at,
        updated_at: userData.user.updated_at,
      },
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data) {
    data.password = await bcrypt.hash(data.password, 10);
    const response = await this.userServive.create(data);
    if (response) {
      const { password, ...result } = data;
      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}
