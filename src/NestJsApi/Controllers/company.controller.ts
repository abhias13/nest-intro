import { Body, Controller,Get, Post,Param} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCompanyDto } from "../dtos/CreateCompany.dto";
import { CompanyService } from "../Services/company.service";

@ApiTags('Company')
@Controller('company')
export class CompanyController{
    constructor(private readonly companyservice : CompanyService){

    }

    @Post('create')
    async addcompany(@Body() createCompanydto: CreateCompanyDto){
        return await this.companyservice.createcompany(createCompanydto);
    }

    @Get('title')
    getCompanyBytitle(@Param('title') title: string){
        return this.companyservice.getcompany(title);
    }

}