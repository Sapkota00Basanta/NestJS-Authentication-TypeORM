// Import Third-Party Modules
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';

// Import User-Defined Modules
import { mainDataSourceOptions } from './datasource.database';
import { getEnvironmentFilePath } from './common/helper/env.helper';
import { BooksModule } from './components/books/books.module';
import { UsersModule } from './components/users/users.module';
import { AuthModule } from './components/auth/auth.module';
import { AuthService } from './components/auth/auth.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { JwtService } from '@nestjs/jwt';

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
    AuthModule,
    UsersModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor,
    },
    AuthService,
    JwtService,
  ],
})
export class AppModule {}
