import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsDataService {
  private products: Array<Product> = [];

  addProduct(_item_: CreateProductDto): Product {
    const product: Product = {
      ..._item_,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.push(product);
    return product;
  }

  deleteProduct(id: string): void {
    this.products = this.products.filter((i) => i.id !== id);
  }

  updateProduct(id: string, dto: UpdateProductDto): Product {
    const product = this.getProductById(id);
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = { ...product, ...dto, updatedAt: new Date() };
    return this.products[index];
  }

  getProductById(id: string): Product {
    return this.products.find((product) => product.id === id);
  }

  getAllProducts(): Array<Product> {
    return this.products;
  }
}
