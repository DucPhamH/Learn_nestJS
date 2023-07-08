import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  readonly name: string;
}

export class UpdateCategoryDto {
  @IsOptional()
  @IsString()
  readonly name: string;
}
