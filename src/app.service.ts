// Import Third-Party Modules
import { Injectable } from '@nestjs/common';

/**
 * This is the main service which interacts with database and used in controller.
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
