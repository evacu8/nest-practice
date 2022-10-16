import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExternalProductDto } from './dto/external-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getProductById(@Param('id') _id_: string): string {
    return `GetByID ${_id_}`;
  }

  @Post()
  addIProduct(@Body() _product_: CreateProductDto): ExternalProductDto {
    return null;
  }
}
