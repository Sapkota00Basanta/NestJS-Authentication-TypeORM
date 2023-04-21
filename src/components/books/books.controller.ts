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
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import {
  ApiOkResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiUnprocessableEntityResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';

// Import User-Defined Modules
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

/**
 * This module is a controller which is used for handling incoming request and response
 * for Books module.
 */
@ApiTags('Book Module REST API Endpoints')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse({ description: 'Sucessfully Created Book Resource.' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request.' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request.' })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Sucessfully Fetched all Books Resource.' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({
    description: 'The resource is currently not available.',
  })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Sucessfully Fetched the specific Book Resource.',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({
    description: 'The resource is currently not available',
  })
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

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOkResponse({ description: 'Sucessfully Updated Resource.' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request.' })
  @ApiNotFoundResponse({
    description: 'The resource is currently not available.',
  })
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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOkResponse({ description: 'Sucessfully Deleted Resource.' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request.' })
  @ApiNotFoundResponse({
    description: 'The resource no longer exists or has been removed.',
  })
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.booksService.remove(+id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Book details deleted sucessfully' });
  }
}
