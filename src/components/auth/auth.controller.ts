//Import Third-Party Modules
import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
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
import { CreateUserDto } from '../users/dto/create-users.dto';

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
    return this.authService.login(request.user);
  }

  @Post('register')
  @ApiCreatedResponse({ description: 'User registered sucessfully.' })
  @ApiBody({ type: CreateUserDto })
  @ApiForbiddenResponse({ description: 'Unauthorized Request.' })
  @ApiNotFoundResponse({
    description: 'The resource is currently not available.',
  })
  // register (@Request() request) {
  register(@Body() body: CreateUserDto) {
    return this.authService.register(body);
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
