import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CompanyController } from "../Controllers/company.controller";
import { Company } from "../entity/company.entity";
import { Customer } from "../entity/customer.entity";
import { CompanyService } from "../Services/company.service";
import { CustomerService } from "../Services/customers.service";

@Module({
    imports:[TypeOrmModule.forFeature([Company,Customer])],
    controllers:[CompanyController],
    providers:[CompanyService],
})
export class CompanyModule{

}