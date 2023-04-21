// Import Third-Party Modules
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Import User-Defined Modules
import { AppModule } from './app.module';

/**
 * This is a main entry point of application which uses NestFactory to create
 * a Nest Application instance.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Defining a configuration for swagger documentation.
   * This Document Builder class instance creates a
   * base document that matches OpenAPI Specification.
   */
  const swaggerDocumentConfiguration = new DocumentBuilder()
    .setTitle('Nest-auth-Endpoints')
    .setBasePath('v1')
    .setDescription(
      'This is Swagger OpenAPI Documenation of Nest with Authentication Project.',
    )
    .setVersion('1.0')
    .build();

  /**
   * Actual Swagger API Documentation with specified configuration.
   * SwaggerModule.createDocument accepts two arguments:
   * a) server application instance
   * b) configuration object for Swagger API
   * */
  const swaggerActualDocument = SwaggerModule.createDocument(
    app,
    swaggerDocumentConfiguration,
  );

  /**
   * Here, we are calling the setup method of swaggerModule.
   * It takes 3 arguments:
   * a) Swagger API Documenation Route Path
   * b) Nest Server application instance
   * c) Complete Swagger Documentation
   */
  SwaggerModule.setup('swaggerApi', app, swaggerActualDocument);
  await app.listen(3000);
}
bootstrap();
