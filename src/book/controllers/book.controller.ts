import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { BookService } from 'src/book/services/book.service';
import { Book } from '../schemas/book.schema';
import { CreateBookDto, updateBookDto } from '../dtos/book.dto';

@Controller('api/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAllBook(): Promise<{ message: string; data: Book[] }> {
    return this.bookService.findAllBook();
  }

  @Get(':id')
  async findBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.findBook(id);
  }

  @Put(':id')
  async findAndUpdateBook(
    @Param('id') id: string,
    @Body() book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.findAndUpdateBook(id, book);
  }

  @Post()
  async createBook(@Body() book: updateBookDto): Promise<Book> {
    return this.bookService.createBook(book);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.deleteBook(id);
  }
}
