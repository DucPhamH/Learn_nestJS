import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getAllBook(): string {
    return 'Hello World!';
  }
}
