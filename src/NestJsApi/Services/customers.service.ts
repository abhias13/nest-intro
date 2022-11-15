import { Inject, Injectable,Param ,forwardRef} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../ViewModel/CreateCustomer.dto';
import { Customer } from '../entity/customer.entity';

@Injectable()
export class CustomerService{

    constructor(
        @InjectRepository(Customer) 
        private customerRepos: Repository<Customer>,
        ){

        }

        createCustomer(customerdto: CreateCustomerDto){
            return this.customerRepos.save(customerdto);
            
        }

        getAllCustomers(){
            return this.customerRepos.find();
        }
        
        getCustomer(id: number){
            return this.customerRepos.findOneBy({id});
        }

        getCustomerByName(name: string){
            return this.customerRepos.findOneBy({name});
        }

        async getcompanydetails(name:string){
            const details = await this.customerRepos.findOne({
                where: {
                    name,
                },
                relations: {
                    company: true,
                },
            })
            
            return details;
          }
        
        

}