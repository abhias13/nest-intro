import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product1 } from "./entity/product1.entity";

@Injectable()
export class ProductRepository extends Repository<Product1>{
    async getMyFather(){
        console.log("Name");
        return await 'FatherName'
    }
}