import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductsDto } from '../ViewModel/CreateProducts.dto';
import { Product } from '../entity/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepos: Repository<Product>, //new Repostiory
  ) {}

  async insertProduct(productdto: CreateProductsDto
    // title: string, desc: string, price: number
    ) {
    const prodId = Math.random() * 100;
    // const newProduct = new Product(title,desc,price,prodId);
    // console.log(newProduct);
    return await this.productRepos.save(productdto);
  }

  async getAllItem() {
    const result = await this.productRepos.find();
    return result;
  }

  async getSingleProduct(productId: number) {
    const query = { 
        id: productId 
    }
    const result = await this.productRepos.createQueryBuilder().where(query).execute();
    return result
  }

  async update(query: any, updateProduct:any) {
    const result =await this.productRepos.createQueryBuilder()
                    .update(updateProduct)
                    .where(query)
                    .execute();
    return result;
  }

  async deleteItem(prodId: number) {
    const query = {
        id: prodId,
    }
    const result =  await this.productRepos
                    .createQueryBuilder()
                    .delete()
                    .where(query)
                    .execute()
    return result; 
  }
}
