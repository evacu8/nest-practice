import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ExternalProductDto } from './dto/external-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsDataService } from './products-data.service';
import { Product } from './interfaces/product.interface';
import { dateToArray } from 'src/helpers/date.helper';

@Controller('products')
export class ProductsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private productsRepository: ProductsDataService) { }

  @Post()
  addProduct(@Body() item: CreateProductDto): ExternalProductDto {
    return this.mapProductToExternal(this.productsRepository.addProduct(item));
  }

  @Get()
  getAllProducts(): ExternalProductDto[] {
    const products = this.productsRepository.getAllProducts();
    return products.map((p) => this.mapProductToExternal(p));
  }

  @Get(':id')
  getProductById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): ExternalProductDto {
    return this.mapProductToExternal(
      this.productsRepository.getProductById(id),
    );
  }

  @Put(':id')
  updateProduct(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() product: UpdateProductDto,
  ): ExternalProductDto {
    return this.mapProductToExternal(
      this.productsRepository.updateProduct(id, product),
    );
  }

  @Delete(':id')
  @HttpCode(204)
  deleteProduct(@Param('id') _id_: string): void {
    this.productsRepository.deleteProduct(_id_);
  }

  mapProductToExternal(product: Product): ExternalProductDto {
    return {
      ...product,
      createdAt: dateToArray(product.createdAt),
      updatedAt: dateToArray(product.updatedAt),
    };
  }
}
