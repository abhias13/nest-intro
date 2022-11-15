
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomersController } from "../Controllers/customers.controller";
import { Company } from "../entity/company.entity";
import { Customer } from "../entity/customer.entity";
import { CompanyService } from "../Services/company.service";
import { CustomerService } from "../Services/customers.service";

@Module({
    imports:[TypeOrmModule.forFeature([Customer,Company])],
    controllers: [CustomersController],
    providers: [CustomerService,CompanyService], 
})
export class CustomersModule {
     
}  