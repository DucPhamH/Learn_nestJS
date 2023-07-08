import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Category } from '../schemas/category.schema';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';
import { plainToClass } from 'class-transformer';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAllBook(): Promise<{ message: string; data: Category[] }> {
    return this.categoryService.findAllCategory();
  }

  @Get(':id')
  async findBook(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findCategory(id);
  }

  @Put(':id')
  async findAndUpdateBook(
    @Param('id') id: string,
    @Body() category: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.findAndUpdateCategory(id, category);
  }

  @Post()
  async createBook(@Body() category: CreateCategoryDto): Promise<Category> {
    const categoryReal = plainToClass(CreateCategoryDto, category, {
      excludeExtraneousValues: true,
    });
    console.log(categoryReal);
    return this.categoryService.createCategory(categoryReal);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<Category> {
    return this.categoryService.deleteCategory(id);
  }
}
