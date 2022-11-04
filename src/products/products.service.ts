import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product1 } from './entity/product1.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product1)
    private productRepos: ProductRepository, //new Repostiory
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random() * 100;
    const newProduct = new Product1(title,desc,price,prodId);
    console.log(newProduct);
    return await this.productRepos.save(newProduct);
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

  async countitems(){
    const query = {
  }
  const result = await this.productRepos.count()
  return result;
  }
}
