import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CompanyController } from "../Controllers/company.controller";
import { Company } from "../entity/company.entity";
import { CompanyService } from "../Services/company.service";

@Module({
    imports:[TypeOrmModule.forFeature([Company])],
    exports:[TypeOrmModule],
    controllers:[CompanyController],
    providers:[CompanyService],
})
export class CompanyModule{

}