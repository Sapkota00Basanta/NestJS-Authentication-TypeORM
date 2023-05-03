// Import Third-Party Modules
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

// Import User-Defined Modules
import { AppModule } from './app.module';

/**
 * This is a main entry point of application which uses NestFactory to create
 * a Nest Application instance.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Here, we are validating our request body payload data
   * to check if there are any data outside the specified data
   * transfer object.
   * Setting, whitelist to true -> only allow properties specified in DTO.
   * transform to true -> converts js object data to defined types.
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

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
  const exampleTimeStampValue = new Date();
  console.log('Example TimeStamp Value', exampleTimeStampValue);
  const exampleTimeStampValueConvertedToDateString =
    exampleTimeStampValue.toDateString();
  console.log(
    'Example timestamp value after converted to DateString',
    exampleTimeStampValueConvertedToDateString,
  );
  const exampleTimeStampValueConvertedToISOString =
    exampleTimeStampValue.toISOString();
  console.log(
    'Example timestamp value after converting to ISO string',
    exampleTimeStampValueConvertedToISOString,
  );
  const arrayValueOfSplittedTimeValue =
    exampleTimeStampValueConvertedToDateString.split(' ');
  console.log(
    'Array value of date string converted timestamp value',
    arrayValueOfSplittedTimeValue,
  );
  const day = arrayValueOfSplittedTimeValue[0].toLowerCase();
  const month = arrayValueOfSplittedTimeValue[1];
  const dateDay = arrayValueOfSplittedTimeValue[2];
  const year = arrayValueOfSplittedTimeValue[3];
  const returnFullDayString = (partialDayString: string) => {
    switch (partialDayString) {
      case 'sun':
        return 'Sunday';
      case 'mon':
        return 'Monday';
      case 'tue':
        return 'Tuesday';
      case 'wed':
        return 'Wednesday';
      case 'thu':
        return 'Thursday';
      case 'fri':
        return 'Friday';
      default:
        return 'Saturday';
    }
  };
  console.log('Day Full String format', returnFullDayString(day));
  const currentDate = `${year}-${month}-${dateDay}`;
  console.log('Date value', currentDate);
  await app.listen(3000);
}
bootstrap();
