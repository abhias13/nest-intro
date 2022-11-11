import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCompanyDto } from "../dtos/CreateCompany.dto";
import { Company } from "../entity/company.entity";

@Injectable()
export class CompanyService{
    constructor(
        @InjectRepository(Company)
        private CompanyRepos: Repository<Company>,
    ){}

    async createcompany(companydto: CreateCompanyDto) {
        return await this.CompanyRepos.save(companydto);
      }

      getcompany(title: string){
        return this.CompanyRepos.findOneBy({title});
      }
    
}
