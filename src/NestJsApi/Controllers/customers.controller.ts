import { Controller, Post, Get, Body,Param, } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCustomerDto } from "../ViewModel/CreateCustomer.dto";
import { CompanyService } from "../Services/company.service";
import { CustomerService } from "../Services/customers.service";

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

    // @Get(':id')
    // getCustomerById(@Param('id') customerid: number){
    //     return this.customerService.getCustomerbyid(customerid);
    // }
    
    @Get('GetCustomerDetails/:name')
    async getCompnayByCustomername(@Param('name') name:string ){
     return  this.customerService.getcompanydetails(name)
    }
    }