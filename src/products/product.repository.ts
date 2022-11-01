import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "./entity/product.entity";

@Injectable()
export class ProductRepository extends Repository<Product>{
    async getMyFather(){
        console.log("Name");
        return await 'FatherName'
    }
}