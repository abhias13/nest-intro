
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsController } from "../Controllers/products.controller";
import { Product } from "../entity/product.entity";
import { ProductsService } from "../Services/products.service";

@Module({
    imports:[TypeOrmModule.forFeature([Product])],
    // exports: [TypeOrmModule],
    controllers: [ProductsController],
    providers: [ProductsService], 
})
export class ProductsModule {
     
}  