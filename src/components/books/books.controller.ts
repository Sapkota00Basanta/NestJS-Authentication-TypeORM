// Import Third-Party Modules
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

// Import User-Defined Modules
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

/**
 * This module is a controller which is used for handling incoming request and response
 * for Books module.
 */
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<Response> {
    const book = this.booksService.findOne(+id);
    if (book) return res.status(HttpStatus.OK).json(book);
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ error: 'This resource no longer exists or has been removed' });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
    @Res() res: Response,
  ) {
    const updatedBookResponse = this.booksService.update(+id, updateBookDto);
    if (updatedBookResponse)
      return res
        .status(HttpStatus.OK)
        .json({ message: `Sucessfully updated book information` });
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ error: 'The resource no longer exists or has been removed' });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.booksService.remove(+id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Book details deleted sucessfully' });
  }
}
