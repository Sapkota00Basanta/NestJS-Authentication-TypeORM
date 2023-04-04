// Import Third-Party Modules
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

// Import User-Defined Modules
import { Books } from './entities/book.entity';

/**
 * This module is service which is specific to books repository
 * to interact with database & used in books controller.
 */
@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    public bookRepository: Repository<Books>,
  ) {}

  create = async (data: object) => {
    return await this.bookRepository.save(data).then((res) => res);
  };

  findAll = (): Promise<Array<Books>> => {
    return this.bookRepository.find();
  };

  findOne = (id: number): Promise<Books> => {
    return this.bookRepository.findOneBy({ id });
  };

  update = async (
    id: number,
    data: object,
  ): Promise<Books | UpdateResult | undefined> => {
    const book = await this.bookRepository.findOneBy({ id }).then((res) => res);
    if (book)
      return await this.bookRepository.update(id, data).then((res) => res);

    return;
  };

  remove = async (id: number) => {
    return await this.bookRepository.delete(id);
  };
}
