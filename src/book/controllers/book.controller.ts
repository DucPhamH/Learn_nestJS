import { Controller, Get } from '@nestjs/common';
import { BookService } from 'src/book/services/book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('')
  getAllBook(): string {
    return this.bookService.getAllBook();
  }
}
