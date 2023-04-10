// Import Third-Party Modules
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Import User-Defined Modules
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mainDataSourceOptions } from './datasource.database';
import { getEnvironmentFilePath } from './common/helper/env.helper';
import { BooksModule } from './components/books/books.module';

/**
 * Environmemt File path based on our server environment.
 */
const envFilePath: string = getEnvironmentFilePath(`${__dirname}/common/env`);

/**
 * This module is the root module which acts as starting point to build the whole
 * application graph.
 * Note: We have added config module globally so we donot have to import it
 * everytime we need to access the config service.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(mainDataSourceOptions),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
