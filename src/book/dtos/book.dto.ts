import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  readonly description: string;

  @IsNotEmpty()
  @Expose()
  readonly price: number;
}

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;
}
