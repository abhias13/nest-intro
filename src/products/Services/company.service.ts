import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "../entity/company.entity";

@Injectable()
export class CompanyService{
    constructor(
        @InjectRepository(Company)
        private CompanyRepos: Repository<Company>,
    ){}

    async createcompany(title: string, desc: string) {
        const companyid = Math.random()*10;
        const newComapny = new Company(title,desc,companyid);
        console.log(newComapny);
        return await this.CompanyRepos.save(newComapny);
      }
    
}
