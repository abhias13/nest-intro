import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "./entity/company.entity";
import { Product } from "./entity/product.entity";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports:[TypeOrmModule.forFeature([Product,Company])],
    exports: [TypeOrmModule],
    controllers: [ProductsController],
    providers: [ProductsService], 
})
export class ProductsModule {
     
}  