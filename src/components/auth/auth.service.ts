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

  /**
   * This method is responsible for retreiving user and validating password.
   * @param email User Email value
   * @param pass User Password value
   * @returns
   */
  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.userServive.findOne({ where: { name: userName } });
    if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * This method is responsible for generating valid JWT token
   * for validated user.
   * @param userData Validated User details
   * @returns
   */
  async login(userData: any) {
    const payload = {
      user: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        created_at: userData.created_at,
        updated_at: userData.updated_at,
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
