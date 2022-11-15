import { Controller, Post, Get, Body,Param,Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCustomerDto } from "../ViewModel/CreateCustomer.dto";
import { CompanyService } from "../Services/company.service";
import { CustomerService } from "../Services/customers.service";
import { DeleteDateColumn } from "typeorm";

@ApiTags('Customers')
@Controller('customers')
export class CustomersController{

    constructor(private readonly customerService: CustomerService,
        private readonly companyService: CompanyService){

    }

    @Post('create')
    addCustomer(@Body() createCustomerDto: CreateCustomerDto){
        return this.customerService.createCustomer(createCustomerDto);
    }

    @Get()
    getAllCustomers(){
        return this.customerService.getAllCustomers();
    }

    @Get(':id')
    getCustomerById(@Param('id') customerid: number){
        return this.customerService.getCustomer(customerid);
    }
    
    @Get('GetCustomerDetails/:name')
    async getCompnayByCustomername(@Param('name') name:string ){
     return  await this.customerService.getcompanydetails(name)
    }

    @Delete('Customer/:name')
    deleteCustomerByName(@Param('name') name: string){
        return this.customerService.deleteCustomer(name);
    }



    }
