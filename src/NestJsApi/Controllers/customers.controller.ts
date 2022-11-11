import { Controller, Post, Get, Body,Param, Delete, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCustomerDto } from "../dtos/CreateCustomer.dto";
import { CustomerService } from "../Services/customers.service";

@ApiTags('Customers')
@Controller('customers')
export class CustomersController{

    constructor(private readonly customerService: CustomerService){

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

    

    }