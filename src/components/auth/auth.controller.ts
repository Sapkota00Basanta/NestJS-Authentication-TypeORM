//Import Third-Party Modules
import { Controller, Get, UseGuards, Request, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';

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
  @ApiCreatedResponse({ description: 'User login sucessfully.' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request.' })
  @ApiNotFoundResponse({
    description: 'The resource is currently not available.',
  })
  @Post('login')
  async login(@Request() request) {
    return this.authService.login(request);
  }

  @Post('register')
  @ApiCreatedResponse({ description: 'User registered sucessfully.' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request.' })
  @ApiNotFoundResponse({
    description: 'The resource is currently not available.',
  })
  register(@Request() request) {
    return this.authService.register(request);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Sucessfully fetched user profile.' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request.' })
  @ApiNotFoundResponse({
    description: 'The resource is currently not available.',
  })
  @Get('profile')
  getProfile(@Request() request) {
    return request.user;
  }
}
