import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../schemas/category.schema';
import { Model } from 'mongoose';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async findAllCategory(): Promise<{ message: string; data: Category[] }> {
    const categorys = await this.categoryModel.find({});
    const datas = { message: 'Lấy sách thành công', data: categorys };
    if (datas) {
      return datas;
    } else {
      throw new BadRequestException('Lấy thất bại');
    }
  }

  async findCategory(id: string): Promise<Category> {
    const category = await this.categoryModel.findById({ _id: id });
    if (category) {
      return category;
    } else {
      throw new NotFoundException('Không tìm thấy category');
    }
  }

  async findAndUpdateCategory(id: string, category: Category) {
    const updateCategory = await this.categoryModel.findByIdAndUpdate(
      id,
      category,
      {
        new: true,
        runValidators: true,
      },
    );
    if (updateCategory) {
      return updateCategory;
    } else {
      throw new NotFoundException('Không update được book');
    }
  }

  async createCategory(category: Category): Promise<Category> {
    const createCategory = await this.categoryModel.create(category);
    if (createCategory) {
      return createCategory;
    } else {
      throw new BadRequestException('Không tạo được book');
    }
  }

  async deleteCategory(id: string): Promise<Category> {
    const category = await this.categoryModel.findOneAndDelete({ _id: id });
    if (category) {
      return category;
    } else {
      throw new NotFoundException('Xoá category thất bại');
    }
  }
}
