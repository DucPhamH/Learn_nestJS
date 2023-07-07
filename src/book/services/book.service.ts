import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../schemas/book.schema';
import { Model } from 'mongoose';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async findAllBook(): Promise<{ message: string; data: Book[] }> {
    const books = await this.bookModel.find({});
    const datas = { message: 'Lấy sách thành công', data: books };
    if (datas) {
      return datas;
    } else {
      throw new BadRequestException('Lấy thất bại');
    }
  }

  async findBook(id: string): Promise<Book> {
    const book = await this.bookModel.findById({ _id: id });
    if (book) {
      return book;
    } else {
      throw new NotFoundException('Không tìm thấy book');
    }
  }

  async findAndUpdateBook(id: string, book: Book) {
    const updateBook = await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
    if (updateBook) {
      return updateBook;
    } else {
      throw new NotFoundException('Không update được book');
    }
  }

  async createBook(book: Book): Promise<Book> {
    const createBook = await this.bookModel.create(book);
    if (createBook) {
      return createBook;
    } else {
      throw new BadRequestException('Không tạo được book');
    }
  }

  async deleteBook(id: string): Promise<Book> {
    const book = await this.bookModel.findOneAndDelete({ _id: id });
    if (book) {
      return book;
    } else {
      throw new NotFoundException('Xoá book thất bại');
    }
  }
}
