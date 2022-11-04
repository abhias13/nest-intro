import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product1 } from "./entity/product1.entity";

import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports:[TypeOrmModule.forFeature([Product1])],
    exports: [TypeOrmModule],
    controllers: [ProductsController],
    providers: [ProductsService], 
})
export class ProductsModule {
     
}  