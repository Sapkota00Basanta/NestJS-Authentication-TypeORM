// Import Third-Party Modules
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Import User-Defined Modules
import { BooksService } from './books.service';
import { Books } from './entities/book.entity';
import { BooksController } from './books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Books])],
  exports: [TypeOrmModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
