//Import Third-Party Modules
import { Controller, Get, UseGuards, Request, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Import User-Defined Modules
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

/**
 * This moduele is a controller for Auth Module.
 * ApiTag decorator is used to rename the Endpoint group name
 * in Swagger OpenApi Documentation.
 */
@ApiTags('Auth Moduel REST API Endpoints')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() request) {
    return this.authService.login(request);
  }

  @Post('register')
  register(@Request() request) {
    return this.authService.register(request);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() request) {
    return request.user;
  }
}
