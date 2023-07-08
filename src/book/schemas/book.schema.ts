import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;
  @Prop({ default: '', minlength: 3 })
  description: string;
  @Prop({ required: true })
  price: number;
}
export const BookSchema = SchemaFactory.createForClass(Book);
