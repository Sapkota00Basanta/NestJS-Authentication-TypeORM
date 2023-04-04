// Import Third-Party Modules
import { NestFactory } from '@nestjs/core';

// Import User-Defined Modules
import { AppModule } from './app.module';

/**
 * This is a main entry point of application which uses NestFactory to create
 * a Nest Application instance.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
