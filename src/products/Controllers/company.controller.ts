import { Body, Controller, Post } from "@nestjs/common";
import { CompanyService } from "../Services/company.service";

@Controller('company')
export class CompanyController{
    constructor(private readonly companyservice : CompanyService){

    }

    @Post()
    async addcompany(
        @Body('title') companyTitle: string, 
        @Body('description') companyDesc: string, 
        ): Promise<any> {
        return await this.companyservice.createcompany(companyTitle, companyDesc);
    }


}