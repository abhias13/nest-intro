
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomersController } from "../Controllers/customers.controller";
import { Customer } from "../entity/customer.entity";
import { CustomerService } from "../Services/customers.service";

@Module({
    imports:[TypeOrmModule.forFeature([Customer])],
    exports: [TypeOrmModule],
    controllers: [CustomersController],
    providers: [CustomerService], 
})
export class CustomersModule {
     
}  